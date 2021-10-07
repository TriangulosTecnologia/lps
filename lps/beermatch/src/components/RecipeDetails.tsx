import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Divider, Flex, Heading, Link, Text } from 'theme-ui';
import * as React from 'react';

import { Recipe } from '../../recipes';

import barley from '../../public/barley.png';
import hops from '../../public/hops.png';
import water from '../../public/water.png';
import yeast from '../../public/yeast.png';

import CTAButton from './CTAButton';

const ICONS = { water, yeast, hops, barley };

const SectionLabel = ({ children }: { children: string }) => {
  return (
    <Text sx={{ color: 'highlight', fontWeight: 'bold', marginBottom: 7 }}>
      {children}
    </Text>
  );
};

const RecipeDetails = ({
  recipe,
  fullDetails = false,
}: {
  fullDetails?: boolean;
  recipe: Recipe;
}) => {
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
      ...recipe.idealizer,
    },
    {
      label: 'Produtor',
      ...recipe.producer,
    },
  ];

  const peopleFullDetails = [
    {
      label: 'Idealizador',
      items: [recipe.idealizer],
    },
    {
      label: 'Criação da Receita',
      items: recipe.creators,
    },
    {
      label: 'Design Gráfico',
      items: recipe.designers,
    },
    {
      label: 'Produtor',
      items: [recipe.producer],
    },
  ];

  const highlights = [
    {
      image: water,
      label: recipe.highlights.local,
    },
    {
      image: hops,
      label: recipe.highlights.hop,
    },
  ];

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        backgroundColor: 'secondary',
        alignItems: 'center',
        paddingY: 10,
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

      {fullDetails && (
        <>
          <Divider sx={{ marginY: 9 }} />
          <SectionLabel>Perfil</SectionLabel>
          <Text as="p" sx={{ textAlign: 'center' }}>
            {recipe.description}
          </Text>
        </>
      )}

      <Flex sx={{ marginY: 9 }}>
        {Object.entries(ICONS).map(([key, icon]) => (
          <Box key={key} sx={{ marginX: 7 }}>
            <Image src={icon} alt={key} />
          </Box>
        ))}
      </Flex>

      <Divider sx={{ marginY: 8 }} />
      <Flex>
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

      <Divider sx={{ marginY: 8 }} />

      {fullDetails && (
        <>
          <SectionLabel>Destaques</SectionLabel>
          {highlights.map(({ image, label }) => (
            <Flex
              key={label}
              sx={{
                alignSelf: 'flex-start',
                marginBottom: 7,
                alignItems: 'center',
              }}
            >
              <Image src={image} alt={label} width={40} height={40} />
              <Text sx={{ fontSize: 3, marginLeft: 7 }}>{label}</Text>
            </Flex>
          ))}
          <Text as="p" sx={{ textAlign: 'left', marginTop: 7 }}>
            {recipe.highlights.text}
          </Text>
          <Box sx={{ marginY: 9 }}>
            <Image
              {...recipe.highlights.hero}
              alt={recipe.highlights.hero.alt}
            />
          </Box>
        </>
      )}

      {fullDetails && (
        <Flex
          sx={{
            flexDirection: 'column',
            width: '100%',
            alignItems: 'flex-start',
          }}
        >
          {peopleFullDetails.map(({ label, items }) => (
            <React.Fragment key={label}>
              <Divider sx={{ marginY: 7 }} />
              <SectionLabel>{label}</SectionLabel>
              <Flex>
                {items.map(({ name, avatar }) => (
                  <Flex
                    key="name"
                    sx={{ flexDirection: 'column', marginY: 7, marginX: 7 }}
                  >
                    <Image src={avatar} alt="avatar" width={60} height={60} />
                    <Text sx={{ marginTop: 7 }}>{name}</Text>
                  </Flex>
                ))}
              </Flex>
            </React.Fragment>
          ))}
        </Flex>
      )}

      {!fullDetails && (
        <Flex sx={{ marginY: 8 }}>
          {people.map(({ label, name, avatar }) => (
            <Flex
              key={label}
              sx={{ flexDirection: 'column', marginX: [7, 10], marginY: 8 }}
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
                <Image src={avatar} alt={name} width={100} height={100} />
              </Box>
              <Text>{name}</Text>
            </Flex>
          ))}
        </Flex>
      )}

      {fullDetails ? (
        <CTAButton />
      ) : (
        <NextLink passHref href={`/${recipe.id}/detalhes`}>
          <Link sx={{ color: 'highlight', textDecoration: 'underline' }}>
            Informações Técnicas &gt;
          </Link>
        </NextLink>
      )}
    </Flex>
  );
};

export default RecipeDetails;
