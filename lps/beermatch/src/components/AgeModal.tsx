import { useRouter } from 'next/router';
import * as React from 'react';
import Modal from 'react-modal';
import { Button, Flex, Heading, Text } from 'theme-ui';

const AgeModal = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const { push } = useRouter();

  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          zIndex: 10,
          opacity: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          padding: 0,
          height: '400px',
          width: '90%',
          maxWidth: '600px',
        },
      }}
      contentLabel="Example Modal"
    >
      <Flex>
        <Heading
          as="h4"
          sx={{
            width: '100%',
            backgroundColor: 'secondary',
            color: 'highlight',
            textAlign: 'center',
            padding: 7,
          }}
        >
          Verificação de Idade
        </Heading>
      </Flex>
      <Flex
        sx={{
          backgroundColor: 'primary',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Text sx={{ paddingX: 8, paddingY: 10, fontSize: 4 }}>
          Este website comercializa bebidas alcóolicas e portanto deve ser
          utilizado somente por maiores de 18 anos. Ao navegar em nosso site,
          você atesta estar legalmente apto ao consumo de nossos produtos.
        </Text>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            gap: 8,
            marginBottom: 10,
            button: {
              backgroundColor: 'secondary',
            },
          }}
        >
          <Button onClick={() => setIsOpen(false)}>
            Tenho mais de 18 anos
          </Button>
          <Button onClick={() => push('https://www.leitejussara.com.br/')}>
            Sou menor, me tire daqui
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default AgeModal;
