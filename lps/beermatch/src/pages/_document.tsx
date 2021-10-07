// eslint-disable-next-line max-classes-per-file
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Put this component inside a shared package.
 */
class MyDocument extends Document {
  fonts: string[] = [];

  gtmId = '';

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
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
          {this.gtmId && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${this.gtmId}');`,
              }}
            />
          )}
        </Head>
        <body>
          {this.gtmId && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${this.gtmId}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

class D extends MyDocument {
  fonts = [
    'https://fonts.googleapis.com/css2?family=Anton&display=swap',
    'https://fonts.googleapis.com/css2?family=Lato&display=swap',
    'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap',
  ];

  gtmId = 'GTM-52XW83F';
}

export default D;
