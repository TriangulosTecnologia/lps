/* eslint-disable jsx-a11y/alt-text */
import * as dateFns from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
} from 'theme-ui';
import * as React from 'react';

import { Recipe } from '../../recipes';

import barley from '../../public/barley.png';
import hops from '../../public/hops.png';
import water from '../../public/water.png';
import yeast from '../../public/yeast.png';

const ICONS = { water, yeast, hops, barley };

const SectionLabel = ({ children }: { children: string }) => {
  return (
    <Text sx={{ color: 'highlight', fontWeight: 'bold', marginBottom: 6 }}>
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

  const status = 'Vendendo Quotas';

  const dates = [
    {
      label: 'Encerramento das Vendas',
      date: recipe.closingOfSalesDate,
    },
    {
      label: 'Data Estimada de Entrega',
      date: recipe.estimatedDeliveryDate,
    },
  ].map(({ label, date }) => ({
    label,
    date: dateFns.format(
      dateFns.parse(date, 'yyyy-MM-dd', new Date()),
      'dd.MMM.yy',
      { locale: ptBR }
    ),
  }));

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        backgroundColor: 'secondary',
        alignItems: 'center',
        paddingY: 10,
        paddingX: 9,
        color: 'highlight',
        borderRadius: 1,
      }}
    >
      {fullDetails && (
        <>
          <Heading as="h4" sx={{ color: 'highlight' }}>
            {recipe.pack}
          </Heading>
          <Divider sx={{ marginY: 9 }} />
        </>
      )}

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
          <Container variant="fullWidth" sx={{ marginY: 9 }}>
            <Image {...recipe.highlights.hero} />
          </Container>
        </>
      )}

      {fullDetails && (
        <>
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
                      key={name}
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
          <Container variant="fullWidth" sx={{ marginY: 9 }}>
            <Image {...recipe.producer.image} />
          </Container>
          <Text sx={{ textAlign: 'left' }}>
            * Será agendada uma visita na fábrica no dia da produção para todos
            os participantes do lote. Avisaremos o dia com antecedência.
          </Text>
          <Divider sx={{ marginY: 10 }} />
          <SectionLabel>Status</SectionLabel>
          <Heading
            as="h4"
            sx={{
              paddingY: 5,
              paddingX: 8,
              borderRadius: 40,
              backgroundColor: 'primary',
              color: 'text',
              fontSize: 5,
            }}
          >
            {status}
          </Heading>
          <Flex sx={{ gap: 10, justifyContent: 'center', marginY: 10 }}>
            {dates.map(({ label, date }) => (
              <Flex key={label} sx={{ flexDirection: 'column' }}>
                <SectionLabel>{label}</SectionLabel>
                <Heading sx={{ color: 'highlight', fontSize: 6 }}>
                  {date}
                </Heading>
              </Flex>
            ))}
          </Flex>
        </>
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
        <Flex sx={{ gap: 10 }}>
          <NextLink href={`/${recipe.id}#buy-form`} passHref>
            <Button as="a">Comprar</Button>
          </NextLink>
          <NextLink
            href={`/${recipe.id}#recipe-details`}
            passHref
            scroll={false}
          >
            <Button
              variant="transparent"
              as="a"
              sx={{ borderColor: 'highlight' }}
            >
              Voltar
            </Button>
          </NextLink>
        </Flex>
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
