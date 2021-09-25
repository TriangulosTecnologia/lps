import { Button, Card, Flex, Label, Text } from 'theme-ui';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const Line = ({
  label,
  value,
  fontWeight,
}: {
  label: string;
  value: number | string;
  fontWeight?: number | string;
}) => {
  return (
    <Flex sx={{ fontWeight, justifyContent: 'space-between', marginY: 7 }}>
      <Text>{label}</Text>
      <Text>{typeof value === 'number' ? currency.format(value) : value}</Text>
    </Flex>
  );
};

const BuyOrderSummaryCard = ({
  items,
  productsPrice,
  shippingPrice,
}: {
  items: number;
  productsPrice: number;
  shippingPrice: number | string;
}) => {
  const products = `Produtos (${items} item${items > 1 && 's'})`;

  const total =
    typeof shippingPrice === 'number'
      ? productsPrice + shippingPrice
      : productsPrice;

  return (
    <Card variant="highlight">
      <Label>Resumo do pedido</Label>
      <Line label={products} value={productsPrice} />
      <Line label="Frete" value={shippingPrice} />
      <Line label="Subtotal" value={total} fontWeight={700} />
      <Button
        type="submit"
        sx={{ backgroundColor: 'accentVariant', width: '100%', marginTop: 8 }}
      >
        Comprar
      </Button>
    </Card>
  );
};

export default BuyOrderSummaryCard;
