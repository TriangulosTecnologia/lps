import { Icon } from '@iconify/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Button, Divider, Flex, Link, Text } from 'theme-ui';

import background from '../../public/background.png';
import bmYellowBg from '../../public/bm-yellow-bg.png';

const contacts = [
  {
    icon: 'ri:whatsapp-fill',
    label: 'WhatsApp',
  },
  {
    icon: 'ri:instagram-fill',
    label: 'Instagram',
  },
  {
    icon: 'ri:facebook-circle-fill',
    label: 'Facebook',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Text sx={{ textAlign: 'center' }}>
        Dúvidas ou mais informações?
        <br />
        Entre em contato conosco:
      </Text>

      <Box sx={{ marginBottom: 11 }}>
        {contacts.map(({ icon, label }) => (
          <Text
            as="p"
            key={label}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Text sx={{ fontSize: 'lg' }}>
              <Icon icon={icon} />
            </Text>
            {label}
          </Text>
        ))}
      </Box>

      <Box sx={{ zIndex: 1 }}>
        <Image src={bmYellowBg} alt="Beer Match logo" />
      </Box>

      <Flex sx={{ flexDirection: 'column', marginBottom: 11 }}>
        <Button variant="transparent" sx={{ marginBottom: 8 }}>
          Quero participar do grupo de ideias &gt;
        </Button>
        <Button variant="transparent">
          Sou uma cervejaria, quero produzir &gt;
        </Button>
      </Flex>

      <NextLink href="mailto:">
        <Link>contato@beermatch.com.br</Link>
      </NextLink>

      <Divider sx={{ color: 'text', width: 300 }} />

      <Text sx={{ fontSize: 'sm' }}>
        @{year} Beermatch. Todos os direitos reservados.
      </Text>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          height: '480px',
          width: '100vw',
          transform: 'rotate(180deg)',
          zIndex: -1,
        }}
      >
        <Image src={background} alt="Hero backgrounsd" layout="fill" />
      </Box>
    </>
  );
};

export default Footer;