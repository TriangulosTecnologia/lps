import type { AppProps } from 'next/app';
import Script from 'next/script';
import { NextSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'theme-ui';

import { theme } from '../theme';

import Layout from '../components/Layout';

const queryClient = new QueryClient();

const seo = (() => {
  const title = 'Cerveja Artesanal Colaborativa | Beermatch';
  const description =
    'Produção de cervejas artesanais idealizadas pelos participantes. Participe da experiência da concepção de cervejas artesanais. Feitas nas melhores cervejarias e com os melhores insumos. Desafie, colabore e experimente. Viva esse Estilo.';

  return {
    defaultTitle: title,
    description,
    canonical: 'https://www.beermatch.beer',
    openGraph: {
      title: 'Cerveja Artesanal Colaborativa | Beermatch',
      type: 'website',
      description:
        'Produção de cervejas artesanais idealizadas pelos participantes. Participe da experiência da concepção de cervejas artesanais. Feitas nas melhores cervejarias e com os melhores insumos. Desafie, colabore e experimente. Viva esse Estilo.',
      site_name: 'Beermatch',
      images: [
        {
          url: 'https://www.beermatch.beer/beermatch-social.jpg',
          width: 1024,
          height: 1024,
          alt: 'Beer Match. Desafie. Colabore. Experimente. Viva este Estilo',
          type: 'image/jpeg',
        },
      ],
    },
    additionalLinkTags: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    additionalMetaTags: [
      {
        property: 'fb:admins',
        content: 'beermatch.beer',
      },
    ],
  };
})();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextSeo {...seo} />
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
