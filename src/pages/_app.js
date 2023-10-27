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
        {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S9TL9VRKZG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S9TL9VRKZG');
</script>
 {/* <!-- Google tag (gtag.js) --> */}
        <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=RFEzpZ"></script>
      </Head>
      
      <LoadingScreen />
      <Component {...pageProps} />
      
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
