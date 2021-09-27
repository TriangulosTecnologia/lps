import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Card, Container, Field, Flex } from 'theme-ui';
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
      .matches(/^(\d{5}-\d{3}|\d{8})$/),
    quantities: yup.array().of(yup.number().required()).required(),
  })
  .required();

export type BuyData = yup.InferType<typeof schema>;

const useShippingPrice = ({
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

  const [shippingPrice, setShippingPrice] = React.useState(0);

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
        const data = await response.json();
        setShippingPrice(data.price);
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

  return shippingPrice;
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

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/buy', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (response.ok) {
        console.log(json);
      }

      throw response.json;
    } catch (error) {
      console.log(error);
    }
  };

  const quantities = watch('quantities');

  const total = quantities.reduce((acc, cur, index) => {
    return acc + cur * offers[index].price;
  }, 0);

  const shippingPrice = useShippingPrice({
    cep: watch('cep'),
    recipe,
    quantities,
  });

  const disableButton = !isValid || typeof shippingPrice === 'string';

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
            items={3}
            productsPrice={total}
            shippingPrice={shippingPrice}
            disabled={disableButton}
          />
        </Flex>
      </Container>
    </Container>
  );
};

export default BuyForm;
