import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'theme-ui';

import { theme } from '../theme';

import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        src="https://assets.pagar.me/checkout/1.1.0/checkout.js"
        strategy="beforeInteractive"
      />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};
export default App;
