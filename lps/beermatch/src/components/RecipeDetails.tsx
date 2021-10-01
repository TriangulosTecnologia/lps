import Image from 'next/image';
import { Box, Divider, Flex, Heading, Text } from 'theme-ui';

import { Recipe } from '../../recipes';

import barley from '../../public/barley.png';
import hops from '../../public/hops.png';
import water from '../../public/water.png';
import yeast from '../../public/yeast.png';

import Opera from '../../public/Opera.png';
import Zenon from '../../public/avatar.png';

const ICONS = { water, yeast, hops, barley };

const IMAGES: any = { Zenon, Opera };

const SectionLabel = ({ children }: { children: string }) => {
  return (
    <Text sx={{ color: 'highlight', fontWeight: 'bold', marginBottom: 6 }}>
      {children}
    </Text>
  );
};

const RecipeDetails = ({ recipe }: { recipe: Recipe }) => {
  const properties = [
    {
      label: 'Cor',
      value: recipe.properties.color,
    },
    {
      label: '% Álcool',
      value: recipe.properties.alcohol,
    },
    {
      label: 'Amargor',
      value: recipe.properties.bitterness,
    },
    {
      label: 'Corpo',
      value: recipe.properties.body,
    },
  ];

  const people = [
    {
      label: 'Idealizador',
      name: recipe.idealizer.name,
      image: IMAGES[recipe.idealizer.name],
    },
    {
      label: 'Produtor',
      name: recipe.producer.name,
      image: IMAGES[recipe.producer.name],
    },
  ];

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        backgroundColor: 'secondary',
        alignItems: 'center',
        paddingY: 8,
        paddingX: 9,
        color: 'highlight',
      }}
    >
      <SectionLabel>Estilo</SectionLabel>
      <Heading
        as="h2"
        sx={{
          paddingY: 5,
          paddingX: 8,
          backgroundColor: 'highlight',
          color: 'black',
          fontSize: 5,
          borderRadius: 40,
          marginBottom: 8,
        }}
      >
        {recipe.style}
      </Heading>
      <SectionLabel>Marca/Nome</SectionLabel>
      <Heading sx={{ color: 'highlight', fontSize: 6 }}>{recipe.name}</Heading>
      <Flex sx={{ marginY: 9 }}>
        {Object.entries(ICONS).map(([key, icon]) => (
          <Box key={key} sx={{ marginX: 7 }}>
            <Image src={icon} alt={key} />
          </Box>
        ))}
      </Flex>
      <Divider />
      <Flex sx={{ marginY: 8 }}>
        {properties.map(({ label, value }) => {
          return (
            <Flex key={label} sx={{ flexDirection: 'column', marginX: 7 }}>
              <SectionLabel>{label}</SectionLabel>
              {label === 'Cor' ? (
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: '100%',
                    backgroundColor: value,
                  }}
                />
              ) : (
                <Text sx={{ fontSize: 5, fontWeight: 'bold' }}>{value}</Text>
              )}
            </Flex>
          );
        })}
      </Flex>
      <Divider />

      <Flex sx={{ marginY: 8 }}>
        {people.map(({ label, name, image }) => (
          <Flex
            key={label}
            sx={{ flexDirection: 'column', marginX: 10, marginY: 8 }}
          >
            <SectionLabel>{label}</SectionLabel>
            <Box
              sx={{
                height: '100px',
                maxHeight: '100px',
                width: 100,
                marginY: 7,
              }}
            >
              <Image src={image} alt={name} layout="responsive" />
            </Box>
            <Text>{name}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default RecipeDetails;
