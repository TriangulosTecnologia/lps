// eslint-disable-next-line max-classes-per-file
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Put this component inside a shared package.
 */
class MyDocument extends Document {
  fonts: string[] = [];

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          {this.fonts.length > 0 && (
            <>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
              />
            </>
          )}
          {this.fonts.map((href) => (
            <link key={href} href={href} rel="stylesheet" />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

class D extends MyDocument {
  fonts = ['https://fonts.googleapis.com/css2?family=Montserrat&display=swap'];
}

export default D;
