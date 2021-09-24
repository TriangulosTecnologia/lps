import { Box, Grid, Text } from 'theme-ui';

import BuyQuantityButton from './BuyQuantityButton';

import type { Offer } from '../../recipes';

const BuyOfferCard = ({
  offer,
  quantityOnChange,
  quantity,
}: {
  offer: Offer;
  quantity: number;
  quantityOnChange: (q: number) => void;
}) => {
  const { name, description1, description2, price, pack } = offer;

  const unitPrice = price / pack;

  return (
    <Grid columns={3} gap={6}>
      <Box sx={{ gridArea: '1 / 1 / span 1 / span 1' }}>A</Box>
      <Box sx={{ gridArea: '1 / 2 / span 1 / span 2' }}>
        <Text>{name}</Text>
        <Text>{description1}</Text>
        <Text>{description2}</Text>
      </Box>
      <Box sx={{ gridArea: '2 / 1 / span 1 / span 1' }}>{price}</Box>
      <Box sx={{ gridArea: '2 / 2 / span 1 / span 1' }}>{unitPrice}</Box>
      <Box sx={{ gridArea: '2 / 3 / span 1 / span 1' }}>
        <BuyQuantityButton onChange={quantityOnChange} quantity={quantity} />
      </Box>
    </Grid>
  );
};

export default BuyOfferCard;
