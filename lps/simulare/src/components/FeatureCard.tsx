import { useResponsiveValue } from '@theme-ui/match-media';
import Image from 'next/image';
import React from 'react';
import { Box, Flex, Heading, Text, useThemeUI } from 'theme-ui';

export type FeatureCardProps = {
  heading1: string;
  heading2: string;
  text1: string;
  text2: string;
  image: StaticImageData;
};

const SmallLine = () => {
  const { theme } = useThemeUI();

  const primary = theme.colors?.primary as string;

  return (
    <svg
      width="29"
      height="6"
      viewBox="0 0 29 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="3"
        y1="3"
        x2="26"
        y2="3"
        stroke={primary}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};

const FeatureCard = ({ heading1, heading2, image }: FeatureCardProps) => {
  const displaySecondBlock = useResponsiveValue([false, null, null, true]);

  return (
    <Flex sx={{ height: '100%', width: '100%', alignItems: 'center' }}>
      <Flex
        sx={{
          height: [50, 60, null, 80],
          width: [50, 60, null, 80],
          zIndex: 1,
          border: '1px solid',
          borderColor: 'primary',
          borderRadius: '50%',
          backgroundColor: 'background',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Flex sx={{ width: '70%', justifyContent: 'center' }}>
          <Image src={image} alt="Impressora" />
        </Flex>
      </Flex>
      <Flex
        sx={{
          flex: 1,
          border: '1px solid',
          borderColor: 'primary',
          borderRadius: '20px',
          paddingLeft: [9, null, null, null, 10],
          paddingRight: [6],
          paddingY: [5, 6, null, 7],
          marginLeft: '-20px',
          zIndex: 0,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Heading
          as="h3"
          sx={{
            fontSize: ['sm', 'lg'],
            lineHeight: 'sm',
            fontWeight: [400, 700],
            fontFamily: 'heading',
          }}
        >
          {heading1}
          <br />
          {heading2}
        </Heading>
        {displaySecondBlock && (
          <>
            <Box sx={{ marginY: 4 }}>
              <SmallLine />
            </Box>
            <Text
              sx={{
                fontSize: 'sm',
                lineHeight: 'sm',
              }}
            >
              {heading1}
              <br />
              {heading2}
            </Text>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default FeatureCard;
