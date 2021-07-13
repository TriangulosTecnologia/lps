import ReactFullpage from '@fullpage/react-fullpage';
import { Box, Text } from 'theme-ui';

const Home = () => {
  return (
    <ReactFullpage
      // fullpage options
      // licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000} /* Options here */
      render={({ fullpageApi }: any) => {
        return (
          <ReactFullpage.Wrapper>
            <Box className="section">
              <Text as="p">Simulador de Financiaments</Text>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </Box>
            <Box className="section">
              <Text as="p">
                Faça o DOBRO de atendimentos na METADE do tempo.
              </Text>
            </Box>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Home;
