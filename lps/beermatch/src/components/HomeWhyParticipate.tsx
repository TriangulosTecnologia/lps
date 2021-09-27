import Image from 'next/image';
import { Container, Flex, Heading, Text } from 'theme-ui';

import wpLike from '../../public/wp-like.png';
import wpShop from '../../public/wp-shop.png';
import wpBeer from '../../public/wp-beer.png';
import wpSmile from '../../public/wp-smile.png';

/**
 * Why Participate
 */
const whyParticipateItems = [
  { image: wpLike, label: 'Qualidade sempre' },
  { image: wpShop, label: 'Compre local' },
  { image: wpBeer, label: 'Cervejas únicas' },
  { image: wpSmile, label: 'Produção acessível' },
];

const WhyParticipate = () => {
  return (
    <Container variant="fullWidth">
      <Flex
        sx={{
          backgroundColor: 'secondary',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'highlight',
          paddingY: 8,
          paddingX: 8,
        }}
      >
        <Heading as="h5" sx={{ color: 'highlight', marginY: 8 }}>
          Porque Participar
        </Heading>
        <Text as="p" sx={{ textAlign: 'center' }}>
          Somos movidos por levar para qualquer pessoa a experiência de
          participar da concepção de cervejas artesanais.
          <br />
          <br />
          As possibilidades são infinitas, instigamos pessoas a terem ideias e
          de forma colaborativa fazer essas ideias acontecerem.
        </Text>
        <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center', marginTop: 9 }}>
          {whyParticipateItems.map(({ image, label }) => (
            <Flex
              key={label}
              sx={{
                width: 160,
                flexDirection: 'column',
                alignItems: 'center',
                marginX: [6, 8],
                marginY: 8,
              }}
            >
              <Image src={image} layout="fixed" alt={label} />
              <Text
                sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: 7 }}
              >
                {label}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default WhyParticipate;
