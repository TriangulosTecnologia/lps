import { ThemeProvider } from 'theme-ui';
import type { AppProps } from 'next/app';

import { theme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
