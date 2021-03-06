import { Icon } from '@iconify/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Button, Divider, Flex, Link, Text } from 'theme-ui';

import background from '../../public/background.png';
import bmYellowBg from '../../public/bm-yellow-bg.png';

const contacts = [
  {
    icon: 'ri:whatsapp-fill',
    label: '(11) 97287-6552',
    url: 'https://api.whatsapp.com/send?phone=+5511972876552',
  },
  {
    icon: 'ri:instagram-fill',
    label: '@beermatch.beer',
    url: 'https://instagram.com/beermatch.beer',
  },
  {
    icon: 'ri:facebook-circle-fill',
    label: '/beermatch.beer',
    url: 'https://facebook.com/beermatch.beer',
  },
];

const Footer = () => {
  const { push } = useRouter();

  const year = new Date().getFullYear();

  return (
    <>
      <Text sx={{ textAlign: 'center', marginTop: 11, marginBottom: 8 }}>
        Dúvidas ou mais informações?
        <br />
        Entre em contato conosco:
      </Text>

      <Box sx={{ marginBottom: 11 }}>
        {contacts.map(({ icon, label, url }) => (
          <Link
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text sx={{ display: 'flex', alignItems: 'center', marginY: 6 }}>
              <Text sx={{ fontSize: 6, marginRight: 7 }}>
                <Icon icon={icon} />
              </Text>
              {label}
            </Text>
          </Link>
        ))}
      </Box>

      <Box sx={{ zIndex: 1, marginBottom: 9, maxWidth: '90%' }}>
        <Image src={bmYellowBg} alt="Beer Match logo" />
      </Box>

      <Flex
        sx={{
          flexDirection: 'column',
          marginBottom: 11,
        }}
      >
        <Button
          onClick={() => push('https://forms.office.com/r/uQv4ewNrNp')}
          variant="transparent"
          sx={{ marginBottom: 8, color: 'text' }}
        >
          Quero participar do grupo de ideias &gt;
        </Button>
        <Button
          onClick={() => push('https://forms.office.com/r/LJ1eC5QQrp')}
          variant="transparent"
          sx={{ color: 'text' }}
        >
          Sou uma cervejaria, quero produzir &gt;
        </Button>
      </Flex>

      <NextLink href="mailto:" passHref>
        <Link sx={{ marginY: 7 }}>quero@beermatch.beer</Link>
      </NextLink>

      <Divider sx={{ color: 'text', width: 300 }} />

      <Text sx={{ fontSize: 2, marginY: 7 }}>
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
