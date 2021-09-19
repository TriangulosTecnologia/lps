import { ThemeProvider } from 'theme-ui';
import type { AppProps } from 'next/app';

import { theme } from '../theme';

import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};
export default App;
