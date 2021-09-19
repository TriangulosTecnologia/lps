import React from 'react';
import { Button, ButtonProps, Flex, Text } from 'theme-ui';

const BUTTON_SIZE = 46;

const RoundButton = (props: ButtonProps) => {
  return (
    <Button
      sx={{
        backgroundColor: 'secondary',
        borderRadius: '100%',
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        fontSize: 'lg',
        padding: 0,
      }}
      {...props}
    />
  );
};

const BuyQuantityButton = ({
  initialQuantity = 0,
}: {
  initialQuantity?: number;
}) => {
  const [quantity, setQuantity] = React.useState(initialQuantity);

  const decrease = React.useCallback(() => {
    setQuantity((q) => (q > 0 ? q - 1 : q));
  }, []);

  const increase = React.useCallback(() => {
    setQuantity((q) => q + 1);
  }, []);

  return (
    <Flex
      sx={{
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'muted',
        borderRadius: BUTTON_SIZE,
        padding: 4,
        alignItems: 'center',
      }}
    >
      <RoundButton disabled={quantity === 0} onClick={decrease}>
        &minus;
      </RoundButton>
      <Text sx={{ fontSize: 'xl', color: 'text', marginX: 8 }}>{quantity}</Text>
      <RoundButton onClick={increase}>&#43;</RoundButton>
    </Flex>
  );
};

export default BuyQuantityButton;
