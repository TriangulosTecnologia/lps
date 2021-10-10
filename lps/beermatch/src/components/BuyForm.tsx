import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Card,
  Checkbox,
  Container,
  Field,
  Flex,
  Label,
  useThemeUI,
} from 'theme-ui';
import * as yup from 'yup';

import type { Recipe } from '../../recipes';

import BuyOfferCard from './BuyOfferCard';
import BuyOrderSummaryCard from './BuyOrderSummaryCard';

const schema = yup
  .object({
    recipeId: yup.string().required(),
    pickUpOnTheSpot: yup.boolean().required(),
    cep: yup.string().when('pickUpOnTheSpot', {
      is: false,
      then: yup
        .string()
        .required()
        .matches(/^(\d{5}-\d{3}|\d{8})$/)
        .transform((str) => str.replace('-', '')),
    }),
    quantities: yup
      .array()
      .of(yup.number().required())
      .required()
      .test('sum', 'Should buy at least one product.', (rows) => {
        const total = (rows || []).reduce((acc, curr) => {
          return (acc || 0) + (curr || 0);
        }, 0);

        return (total || 0) > 0;
      }),
  })
  .required();

export type BuyFormData = yup.InferType<typeof schema>;

const useShippingFee = ({
  cep,
  recipe,
  quantities,
  pickUpOnTheSpot,
}: {
  cep?: string;
  recipe: Recipe;
  pickUpOnTheSpot: boolean;
  quantities: number[];
}): string | number => {
  const [error, setError] = React.useState('');

  const [validatedCep, setValidatedCep] = React.useState('');

  const [calculating, setCalculating] = React.useState(false);

  const [shippingFee, setShippingFee] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      try {
        const c = await schema.validateAt('cep', { cep, pickUpOnTheSpot });
        setValidatedCep(c as unknown as string);
      } catch {
        setValidatedCep('');
      }
    })();
  }, [cep, pickUpOnTheSpot]);

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
        setShippingFee(data.shippingFee);
      } catch {
        setError('Erro ;/');
      } finally {
        setCalculating(false);
      }
    })();
  }, [quantitiesJson, recipeJson, validatedCep]);

  if (pickUpOnTheSpot) {
    return 0;
  }

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

  const [onBuying, setOnBuying] = React.useState(false);

  const { push } = useRouter();

  const [transactionId, setTransactionId] = React.useState<string>('');

  React.useEffect(() => {
    if (transactionId) {
      push(`/parabens?transactionId=${transactionId}`, '/parabens');
    }
  }, [push, transactionId]);

  const openCheckout = React.useCallback(
    ({
      recipe,
      buyFormData,
      productsPricing,
      shippingFee,
    }: {
      recipe: Recipe;
      buyFormData: BuyFormData;
      productsPricing: number;
      shippingFee: number;
    }) => {
      setTransactionId('');

      setOnBuying(true);

      const checkoutArgs = (() => {
        const boletoExpirationDate = new Date();

        boletoExpirationDate.setDate(boletoExpirationDate.getDate() + 7);

        const items = recipe.offers
          .map((offer, index) => ({
            id: offer.id,
            title: offer.name,
            unit_price: offer.price * 100,
            quantity: buyFormData.quantities[index],
            tangible: 'true',
          }))
          /**
           * To avoid the error:
           * ""value" at position 1 fails because [child "quantity" fails because ["quantity" must be larger than or equal to 1]]"
           */
          .filter((item) => item.quantity > 0);

        const args: any = {
          amount: productsPricing + shippingFee,
          customerData: 'true',
          reviewInformations: 'true',

          paymentMethods: 'boleto,credit_card',

          maxInstallments: 4,
          defaultInstallment: 1,
          minInstallments: 1,
          freeInstallments: 1,
          interestRate: 0.01,

          uiColor: theme?.rawColors?.secondary,

          createToken: 'false',

          items,

          boletoExpirationDate,
        };

        if (buyFormData.cep) {
          args.billing = {
            name: 'Beer Match billing',
            address: {
              zipcode: `${buyFormData.cep.slice(0, 5)}-${buyFormData.cep.slice(
                5
              )}`,
            },
          };
        }

        return args;
      })();

      /**
       * https://docs.pagar.me/v4/docs/configura%C3%A7%C3%B5es-do-checkout
       */
      const checkout = new (window as any).PagarMeCheckout.Checkout({
        encryption_key: process.env.NEXT_PUBLIC_PAGARME_EK_KEY,
        success: async (checkoutForm: any) => {
          try {
            const response = await fetch(`/api/checkout`, {
              method: 'POST',
              body: JSON.stringify({
                checkoutArgs,
                checkoutForm,
                recipe,
                buyFormData,
                productsPricing,
                shippingFee,
              }),
            });

            const json = await response.json();

            if (response.status !== 200) {
              throw json;
            }

            setTransactionId(json.transactionId);
          } catch (err) {
            console.error(err);
            setOnBuying(false);
          }
        },
        error: (err: any) => {
          console.error(err);
          setOnBuying(false);
        },
        close: () => {
          console.log('The modal has been closed.');
        },
      });

      checkout.open(checkoutArgs);
    },
    [theme?.rawColors?.secondary]
  );

  return { openCheckout, transactionId, onBuying };
};

const BuyForm = (recipe: Recipe) => {
  const { id: recipeId, offers } = recipe;

  const {
    control,
    register,
    formState: { isValid, errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<BuyFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      cep: '',
      pickUpOnTheSpot: false,
      recipeId,
      quantities: offers.map((_, index) => (index === 0 ? 1 : 0)),
    },
    mode: 'onChange',
  });

  console.log({ errors });

  const pickUpOnTheSpot = watch('pickUpOnTheSpot');

  /**
   * Reset CEP every time the user changes the pickUpOnTheSpot value
   */
  React.useEffect(() => {
    if (pickUpOnTheSpot) {
      setValue('cep', '');
    }
  }, [pickUpOnTheSpot, setValue]);

  const { openCheckout, onBuying } = useCheckout();

  const quantities = watch('quantities');

  const items = quantities.reduce((acc, cur) => acc + cur, 0);

  const productsPricing = quantities.reduce((acc, cur, index) => {
    return acc + cur * offers[index].price;
  }, 0);

  const shippingFee = useShippingFee({
    cep: watch('cep'),
    pickUpOnTheSpot: watch('pickUpOnTheSpot'),
    recipe,
    quantities,
  });

  const onSubmit = async (buyFormData: BuyFormData) => {
    try {
      if (typeof shippingFee === 'number') {
        openCheckout({
          recipe,
          buyFormData,
          productsPricing,
          shippingFee,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const disableButton = !isValid || typeof shippingFee === 'string';

  return (
    <Container
      id="buy-form"
      variant="fullWidth"
      sx={{ backgroundColor: 'secondary' }}
    >
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
            <Label sx={{ fontSize: 3, marginBottom: 8 }}>
              <Checkbox
                sx={{ marginRight: 5 }}
                {...register('pickUpOnTheSpot')}
              />
              Retirar no Local
            </Label>
            <Field
              label="Calcule seu frete"
              placeholder="CEP: 00000-000"
              disabled={watch('pickUpOnTheSpot')}
              {...register('cep')}
            />
          </Card>

          <BuyOrderSummaryCard
            items={items}
            productsPricing={productsPricing}
            shippingFee={shippingFee}
            disabled={disableButton}
            onBuying={onBuying}
          />
        </Flex>
      </Container>
    </Container>
  );
};

export default BuyForm;
