import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Button, Card, Flex, Input } from 'theme-ui';
import * as yup from 'yup';

import type { Recipe } from '../../recipes';

import BuyOfferCard from './BuyOfferCard';

const schema = yup
  .object({
    recipeName: yup.string().required(),
    cep: yup.string().required(),
    quantity: yup.array().of(yup.number().required()).required(),
  })
  .required();

export type BuyData = yup.InferType<typeof schema>;

const BuyForm = ({ name: recipeName, offers }: Recipe) => {
  const { control, register, handleSubmit, watch } = useForm<BuyData>({
    resolver: yupResolver(schema),
    defaultValues: {
      recipeName,
      quantity: offers.map((_, index) => (index === 0 ? 1 : 0)),
    },
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

  const quantity = watch('quantity');

  const total = quantity.reduce((acc, cur, index) => {
    return acc + cur * offers[index].price;
  }, 0);

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ flexDirection: 'column', gap: 7 }}
    >
      {offers.map((offer, index) => {
        return (
          <Controller
            key={offer.name}
            control={control}
            name={`quantity.${index}`}
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

      <Input {...register('cep')} placeholder="CEP" />
      <Card>{total}</Card>
      <Button type="submit">Comprar</Button>
    </Flex>
  );
};

export default BuyForm;
