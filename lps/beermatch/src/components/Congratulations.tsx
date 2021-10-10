import { Box, Flex, Heading, Link, Text } from 'theme-ui';

import type { Recipe } from '../../recipes';

import RecipeDetails from './RecipeDetails';

const Congratulations = ({
  recipe,
  boleto,
  items,
}: {
  boleto?: { url: string; barcode: string };
  recipe: Recipe;
  items: Array<{
    quantity: number;
    title: string;
  }>;
}) => {
  return (
    <Flex sx={{ flexDirection: 'column', alignItems: 'center', paddingY: 9 }}>
      <Heading as="h3" sx={{}}>
        Parabéns!
      </Heading>
      <Text sx={{ fontSize: 4, marginY: 7 }}>
        Você acabou de adquirir o seu lote único e exclusivo da
      </Text>
      <Heading as="h1">{recipe.name}</Heading>
      <Flex sx={{ flexDirection: 'column', marginY: 8 }}>
        {items.map(({ quantity, title }) => (
          <Text key={title} sx={{ marginY: 5 }}>
            {quantity}x {title}
          </Text>
        ))}
      </Flex>
      {boleto && (
        <>
          <Link href={boleto.url} sx={{ textDecoration: 'underline' }}>
            Para finalizar a sua compra, acesse este link para imprimir o boleto
            ou use o código de barras abaixo.
          </Link>
          <Box
            sx={{
              marginY: 8,
              paddingX: 10,
              maxWidth: 550,
            }}
          >
            <Text
              as="p"
              sx={{
                fontSize: 5,
                wordBreak: 'break-all',
                fontFamily: 'monospace',
              }}
            >
              {boleto.barcode}
            </Text>
          </Box>
        </>
      )}
      <RecipeDetails recipe={recipe} />
    </Flex>
  );
};

export default Congratulations;
