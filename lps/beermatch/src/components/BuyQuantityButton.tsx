import React from 'react';
import { Button, ButtonProps, Flex, Text } from 'theme-ui';

const BUTTON_SIZE = 46;

const RoundButton = (props: ButtonProps) => {
  return (
    <Button
      type="button"
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
  quantity = 0,
  onChange,
}: {
  quantity?: number;
  onChange: (q: number) => void;
}) => {
  const decrease = React.useCallback(() => {
    onChange(quantity > 0 ? quantity - 1 : quantity);
  }, [onChange, quantity]);

  const increase = React.useCallback(() => {
    onChange(quantity + 1);
  }, [onChange, quantity]);

  return (
    <Flex
      sx={{
        width: 'fit-content',
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
