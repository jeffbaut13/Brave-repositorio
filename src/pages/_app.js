import React from "react";
import Head from "next/head";
import Script from "next/script";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brave</title>
        <link rel="icon" href="/img/favicon.svg" />
      </Head>

      {/* Google tag (gtag.js) */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-S9TL9VRKZG" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S9TL9VRKZG');
        `}
      </Script>

      <script async src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RFEzpZ"></script>

      <LoadingScreen />
      <Component {...pageProps} />

      <Script id="wow" src="/js/wow.min.js" />
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      />
      <Script id="simpleParallax" src="/js/simpleParallax.min.js" />
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      />
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
