import { Html, Head, Main, NextScript,Script } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
<Head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="taxify"/>
    <meta name="keywords" content="taxify"/>
    <meta name="author" content="taxify"/>
    <link rel="manifest" href="manifest.json"/>
    <link rel="icon" href="/assets/images/logo/favicon.png" type="image/x-icon"/>
    <title>Taxify - User App </title>

    <link rel="apple-touch-icon" href="/assets/images/logo/favicon.png"/>
    <meta name="title-color" content="#01AA85"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="apple-mobile-web-app-title" content="taxify"/>
    <meta name="msapplication-TileImage" content="/assets/images/logo/favicon.png"/>

    <meta name="msapplication-TileColor" content="#FFFFFF"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>


    <link rel="preconnect" href="https://fonts.googleapis.com/"/>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin/>
    <link href="https://fonts.googleapis.com/css2a0cf.css?family=Lexend:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>

    {/* <!-- iconsax css --> */}
    <link rel="stylesheet" type="text/css" href="/assets/css/vendors/iconsax.css"/>

    {/* <!-- swiper css --> */}
    <link rel="stylesheet" type="text/css" href="/assets/css/vendors/swiper-bundle.min.css"/>

    {/* <!-- aos css --> */}
    <link rel="stylesheet" type="text/css" href="/assets/css/vendors/aos.css"/>


    {/* <!-- bootstrap css --> */}
    <link rel="stylesheet" id="rtl-link" type="text/css" href="/assets/css/vendors/bootstrap.css"/>


    {/* <!-- Theme css --> */}
    <link rel="stylesheet" id="change-link" type="text/css" href="/assets/css/style.css"/>
</Head>
      <body  class="box-background">
        <Main />
        <NextScript />

      </body>
    </Html>
  );
}
