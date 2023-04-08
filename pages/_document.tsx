import { Html, Head, Main, NextScript } from 'next/document'
import { FB_PIXEL_ID } from './lib/fpixel'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="facebook-domain-verification" content="3we1l5psaoel1yyip2nxpn1ozoo892" />
      <noscript><img height="1" width="1" style={{display:"none"}}
      src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
      /></noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
