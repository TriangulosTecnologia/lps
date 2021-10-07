/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line max-classes-per-file
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Put this component inside a shared package.
 */
class MyDocument extends Document {
  fonts: string[] = [];

  gtmId = '';

  pixelId = '';

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
                __html: `  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', ${this.pixelId});
                  fbq('track', 'PageView');`,
              }}
            />
          )}
          {this.pixelId && (
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
          {this.pixelId && (
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none', visibility: 'hidden' }}
                src={`https://www.facebook.com/tr?id=${this.pixelId}&ev=PageView&noscript=1`}
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

  pixelId = '449989473122281';
}

export default D;
