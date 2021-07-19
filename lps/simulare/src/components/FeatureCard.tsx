import Image from 'next/image';
import React from 'react';
import { Flex, Heading } from 'theme-ui';

export type FeatureCardProps = {
  heading1: string;
  heading2: string;
  text1: string;
  text2: string;
  image: StaticImageData;
};

const FeatureCard = ({ heading1, heading2, image }: FeatureCardProps) => {
  return (
    <Flex sx={{ height: '60px', width: '100%' }}>
      <Flex
        sx={{
          height: '60px',
          width: '60px',
          zIndex: 1,
          border: '1px solid',
          borderColor: 'primary',
          borderRadius: '50%',
          backgroundColor: 'background',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Flex sx={{ width: '75%', justifyContent: 'center' }}>
          <Image src={image} alt="Impressora" />
        </Flex>
      </Flex>
      <Flex
        sx={{
          flex: 1,
          border: '1px solid',
          borderColor: 'primary',
          borderRadius: '20px',
          paddingLeft: 9,
          paddingRight: 6,
          marginLeft: '-20px',
          zIndex: 0,
          alignItems: 'center',
        }}
      >
        <Heading
          as="h3"
          sx={{
            fontSize: 'base',
            lineHeight: 'sm',
            fontWeight: 700,
            fontFamily: 'heading',
          }}
        >
          {heading1}
          <br />
          {heading2}
        </Heading>
      </Flex>
    </Flex>
  );
};

export default FeatureCard;
