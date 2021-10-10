import type { AppProps } from 'next/app';
import Script from 'next/script';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'theme-ui';

import { theme } from '../theme';

import Layout from '../components/Layout';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        src="https://assets.pagar.me/checkout/1.1.0/checkout.js"
        strategy="beforeInteractive"
      />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};
export default App;
