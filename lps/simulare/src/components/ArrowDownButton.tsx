import Button from './Button';

import ArrowDown from './icons/ArrowDown';

const ArrowDownButton = ({ color }: { color?: string }) => (
  <Button color={color}>
    <ArrowDown />
  </Button>
);

export default ArrowDownButton;
