import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

import { ThemeProvider } from 'theme-ui';

import { theme } from '../theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextSeo
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '76x76',
          },
        ]}
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
