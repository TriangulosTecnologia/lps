import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  try {
    const {
      checkoutArgs: { items },
      checkoutForm,
      recipe,
      productsPricing,
      shippingFee,
      buyFormData,
    } = JSON.parse(req.body);

    const metadata = {
      items,
      productsPricing,
      shippingFee,
      recipe,
      buyFormData,
    };

    const customer = {
      /**
       * `external_id` is required to buy with credit card.
       */
      external_id: checkoutForm.customer.document_number,
      name: checkoutForm.customer.name,
      email: checkoutForm.customer.email,
      country: 'br',
      type: 'individual',
      documents: [
        {
          type: 'cpf',
          number: checkoutForm.customer.document_number,
        },
      ],
      phone_numbers: [
        `+55${checkoutForm.customer.phone.ddd}${checkoutForm.customer.phone.number}`,
      ],
    };

    const address = {
      name: customer.name,
      address: { ...checkoutForm.customer.address, country: 'br' },
    };

    /**
     * Avoid the error: ""complementary" is not allowed to be empty"
     */
    if (!address.address.complementary) {
      delete address.address.complementary;
    }

    const body = {
      api_key: process.env.PAGARME_AK_KEY,
      /**
       * The response is received at the time.
       * https://docs.pagar.me/v3/reference#criar-transacao
       */
      async: false,
      soft_descriptor: 'Beer Match',
      ...checkoutForm,
      /**
       * Replace by customer without `address` property.
       */
      customer,
      items,
      metadata,
      billing: address,
    };

    const response = await fetch('https://api.pagar.me/1/transactions', {
      body: JSON.stringify(body),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await response.json();

    if (response.status !== 200) {
      throw json;
    }

    const { tid } = json;

    const boleto =
      json.payment_method === 'boleto'
        ? { url: json.boleto_url, barcode: json.boleto_barcode }
        : undefined;

    /**
     * Only works in production.
     * https://docs.pagar.me/v4/reference#notificando-cliente-sobre-boleto-a-ser-pago
     */
    if (process.env.NODE_ENV === 'production' && boleto) {
      try {
        await fetch(
          `https://api.pagar.me/1/transactions/${tid}/collect_payment`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              api_key: process.env.PAGARME_AK_KEY,
              email: customer.email,
            }),
          }
        );
      } catch (error) {
        console.error(error);
      }
    }

    res.status(200).json({ success: true, transactionId: tid });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error });
  }
}
