import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>NextPage - Blog, Magazine Html Template</title>
        <link
          rel="icon"
          href="assets/img/favicon.png"
          sizes="20x20"
          type="image/png"
        />
        <link rel="stylesheet" href="assets/css/vendor.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
        <Script src="assets/js/bootstrap.min.js.map" />
        <Script src="assets/js/vendor.js" />
        <Script src="assets/js/main.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
