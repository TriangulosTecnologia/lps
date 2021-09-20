import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, Flex, Input } from 'theme-ui';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    cep: yup.string().required(),
  })
  .required();

export type BuyData = yup.InferType<typeof schema>;

const BuyForm = () => {
  const { register, handleSubmit } = useForm<BuyData>({
    resolver: yupResolver(schema),
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

  return (
    <Flex as="form" onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('cep')} />
      <Button type="submit">Comprar</Button>
    </Flex>
  );
};

export default BuyForm;
