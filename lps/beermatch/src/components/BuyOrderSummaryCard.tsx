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
  shippingFee,
  disabled,
}: {
  items: number;
  productsPrice: number;
  shippingFee: number | string;
  disabled?: boolean;
}) => {
  const products = `Produtos (${items} item${items > 1 ? 's' : ''})`;

  const total =
    typeof shippingFee === 'number'
      ? productsPrice + shippingFee
      : productsPrice;

  return (
    <Card variant="highlight">
      <Label>Resumo do pedido</Label>
      <Line label={products} value={productsPrice} />
      <Line label="Frete" value={shippingFee} />
      <Line label="Subtotal" value={total} fontWeight={700} />
      <Button
        type="submit"
        disabled={disabled}
        sx={{
          backgroundColor: disabled ? 'muted' : 'accentVariant',
          width: '100%',
          marginTop: 8,
        }}
      >
        Comprar
      </Button>
    </Card>
  );
};

export default BuyOrderSummaryCard;
