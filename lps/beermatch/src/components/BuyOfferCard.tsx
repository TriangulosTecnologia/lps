import Image from 'next/image';
import { Box, Card, Grid, Heading, Text } from 'theme-ui';

import BuyQuantityButton from './BuyQuantityButton';

import type { Offer } from '../../recipes';

import pack6 from '../../public/pack-6.png';
import pack12 from '../../public/pack-12.png';

const getImage = (pack: number) => {
  if (pack === 6) {
    return pack6;
  }

  return pack12;
};

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const BuyOfferCard = ({
  offer,
  quantityOnChange,
  quantity,
}: {
  offer: Offer;
  quantity: number;
  quantityOnChange: (q: number) => void;
}) => {
  const { name, description, price: priceInCents, pack } = offer;

  const price = priceInCents / 100;

  const unitPrice = price / pack;

  return (
    <Card variant="highlight">
      <Grid
        columns={['120px auto 120px', '150px auto 120px']}
        sx={{ gap: 6, alignItems: 'center' }}
      >
        <Box sx={{ gridArea: '1 / 1 / span 1 / span 1' }}>
          <Image src={getImage(pack)} alt={`Pack com ${pack} garrafas`} />
        </Box>
        <Box
          sx={{
            gridArea: '1 / 2 / span 1 / span 2',
            textAlign: 'left',
            paddingLeft: 8,
          }}
        >
          <Heading as="h5" sx={{ textAlign: 'left', fontSize: [4, 5] }}>
            {name}
          </Heading>
          <Text sx={{ whiteSpace: 'pre-line', fontSize: 2 }}>
            {description}
          </Text>
        </Box>
        <Box sx={{ gridArea: '2 / 1 / span 1 / span 1' }}>
          <Heading as="h5">{currency.format(price)}</Heading>
        </Box>
        <Box sx={{ gridArea: '2 / 2 / span 1 / span 1', textAlign: 'center' }}>
          <Text sx={{ fontWeight: 700, fontSize: [3] }}>
            valor por unidade
            <br />
            {currency.format(unitPrice)}
          </Text>
        </Box>
        <Box sx={{ gridArea: '2 / 3 / span 1 / span 1' }}>
          <BuyQuantityButton onChange={quantityOnChange} quantity={quantity} />
        </Box>
      </Grid>
    </Card>
  );
};

export default BuyOfferCard;
