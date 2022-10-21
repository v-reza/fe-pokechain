import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out-sine",
      once: true,
      offset: 50,
      delay: 50,
      duration: 1000,
    });
  });
  return (
    <>
      <Head>
        <meta name="google" content="notranslate" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
