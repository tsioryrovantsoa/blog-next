import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <Script src="/assets/js/bootstrap.min.js.map" />
        <Script src="/assets/js/vendor.js" />
        <Script src="/assets/js/main.js" />
        <link
          rel="icon"
          href="/assets/img/favicon.png"
          sizes="20x20"
          type="image/png"
        />
        <link rel="stylesheet" href="/assets/css/vendor.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
