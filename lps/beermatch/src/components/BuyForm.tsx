import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Card, Container, Field, Flex, useThemeUI } from 'theme-ui';
import * as yup from 'yup';

import type { Recipe } from '../../recipes';

import BuyOfferCard from './BuyOfferCard';
import BuyOrderSummaryCard from './BuyOrderSummaryCard';

const schema = yup
  .object({
    recipeName: yup.string().required(),
    cep: yup
      .string()
      .required()
      .matches(/^(\d{5}-\d{3}|\d{8})$/)
      .transform((str) => str.replace('-', '')),
    quantities: yup.array().of(yup.number().required()).required(),
  })
  .required();

export type BuyData = yup.InferType<typeof schema>;

const useShippingFee = ({
  cep,
  recipe,
  quantities,
}: {
  cep: string;
  recipe: Recipe;
  quantities: number[];
}): string | number => {
  const [error, setError] = React.useState('');

  const [validatedCep, setValidatedCep] = React.useState('');

  const [calculating, setCalculating] = React.useState(false);

  const [shippingFee, setShippingFee] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      try {
        const c = await schema.validateAt('cep', { cep });
        setValidatedCep(c as unknown as string);
      } catch {
        setValidatedCep('');
      }
    })();
  }, [cep]);

  const quantitiesJson = JSON.stringify(quantities);

  const recipeJson = JSON.stringify(recipe);

  React.useEffect(() => {
    if (!validatedCep) {
      return;
    }

    (async () => {
      try {
        setError('');
        setCalculating(true);
        const response = await fetch(`/api/shipping`, {
          method: 'POST',
          body: JSON.stringify({
            cep: validatedCep,
            recipe: JSON.parse(recipeJson),
            quantities: JSON.parse(quantitiesJson),
          }),
        });

        if (response.status !== 200) {
          throw new Error('Error');
        }

        const data = await response.json();
        setShippingFee(data.price);
      } catch {
        setError('Erro ;/');
      } finally {
        setCalculating(false);
      }
    })();
  }, [quantitiesJson, recipeJson, validatedCep]);

  if (error) {
    return error;
  }

  if (!validatedCep) {
    return '-';
  }

  if (calculating) {
    return 'Calculando...';
  }

  return shippingFee;
};

const useCheckout = () => {
  const { theme } = useThemeUI();

  const checkout = React.useRef<any>(null);

  const [amount, setAmount] = React.useState(0);

  const [checkoutSuccessData, setCheckoutSuccessData] = React.useState<any>();

  React.useEffect(() => {
    /**
     * https://docs.pagar.me/v4/docs/configura%C3%A7%C3%B5es-do-checkout
     */
    checkout.current = new (window as any).PagarMeCheckout.Checkout({
      encryption_key: process.env.NEXT_PUBLIC_PAGARME_EK_KEY,
      success(data: any) {
        setCheckoutSuccessData(data);
      },
      error(err: any) {
        console.log(err);
      },
      close() {
        console.log('The modal has been closed.');
      },
    });
  }, []);

  React.useEffect(() => {
    if (checkoutSuccessData) {
      fetch(`/api/capture`, {
        method: 'POST',
        body: JSON.stringify({
          amount,
          token: checkoutSuccessData.token,
          paymentMethod: checkoutSuccessData.payment_method,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('from api', data);
        });
    }
  }, [amount, checkoutSuccessData]);

  const openCheckout = React.useCallback(
    ({
      recipe,
      buyData,
      productsPrice,
      shippingFee,
    }: {
      recipe: Recipe;
      buyData: BuyData;
      productsPrice: number;
      shippingFee: number;
    }) => {
      if (checkout.current) {
        const args = {
          amount: (productsPrice + shippingFee) * 100,
          customerData: 'true',
          reviewInformations: 'true',

          paymentMethods: 'boleto,credit_card',

          maxInstallments: 4,
          defaultInstallment: 1,
          minInstallments: 1,
          freeInstallments: 1,
          interestRate: 0.01,

          uiColor: theme?.rawColors?.secondary,

          createToken: 'true',

          billing: {
            address: {
              zipcode: `${buyData.cep.slice(0, 5)}-${buyData.cep.slice(5)}`,
            },
          },

          items: recipe.offers
            .map((offer, index) => ({
              id: offer.id,
              title: offer.name,
              unit_price: offer.price * 100,
              quantity: buyData.quantities[index],
              tangible: 'false',
            }))
            /**
             * To avoid the error:
             * ""value" at position 1 fails because [child "quantity" fails because ["quantity" must be larger than or equal to 1]]"
             */
            .filter((item) => item.quantity > 0),

          boletoExpirationDate: '2021-10-06',
        };

        setCheckoutSuccessData(null);
        setAmount(args.amount);
        checkout.current.open(args);
      }
    },
    [theme?.rawColors?.secondary]
  );

  return { openCheckout };
};

const BuyForm = (recipe: Recipe) => {
  const { name: recipeName, offers } = recipe;

  const {
    control,
    register,
    formState: { isValid },
    handleSubmit,
    watch,
  } = useForm<BuyData>({
    resolver: yupResolver(schema),
    defaultValues: {
      cep: '',
      recipeName,
      quantities: offers.map((_, index) => (index === 0 ? 1 : 0)),
    },
    mode: 'onChange',
  });

  const { openCheckout } = useCheckout();

  const quantities = watch('quantities');

  const items = quantities.reduce((acc, cur) => acc + cur, 0);

  const productsPrice = quantities.reduce((acc, cur, index) => {
    return acc + cur * offers[index].price;
  }, 0);

  const shippingFee = useShippingFee({
    cep: watch('cep'),
    recipe,
    quantities,
  });

  const onSubmit = async (buyData: BuyData) => {
    try {
      if (typeof shippingFee === 'number') {
        openCheckout({ recipe, buyData, productsPrice, shippingFee });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const disableButton = !isValid || typeof shippingFee === 'string';

  return (
    <Container variant="fullWidth" sx={{ backgroundColor: 'secondary' }}>
      <Container>
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            flexDirection: 'column',
            gap: 7,
            paddingY: 8,
          }}
        >
          {offers.map((offer, index) => {
            return (
              <Controller
                key={offer.name}
                control={control}
                name={`quantities.${index}`}
                render={({ field: { onChange, value } }) => {
                  return (
                    <BuyOfferCard
                      quantity={value as number}
                      quantityOnChange={onChange}
                      offer={offer}
                    />
                  );
                }}
              />
            );
          })}

          <Card variant="highlight">
            <Field
              label="Calcule seu frete"
              placeholder="CEP: 00000-000"
              {...register('cep')}
            />
          </Card>

          <BuyOrderSummaryCard
            items={items}
            productsPrice={productsPrice}
            shippingFee={shippingFee}
            disabled={disableButton}
          />
        </Flex>
      </Container>
    </Container>
  );
};

export default BuyForm;
