import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";

import mainFunc from "../public/scripts/main";
import glightInit from "../public/scripts/glightinit";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ScrollUpArrow from "../components/ScrollUpArrow";
import HeroSection from "../components/HeroSection";

export default function Home() {
  useEffect(() => {
    mainFunc();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <meta content="" name="description" />
        <meta content="" name="keywords" />

        <link href="/assets/img/favicon.png" rel="icon" />
        <link
          href="/assets/img/apple-touch-icon.png"
          rel="apple-touch-icon"
        ></link>

        {/* eslint-disable-next-line */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Roboto:100,300,400,500,700|Philosopher:400,400i,700,700i"
          rel="stylesheet"
        ></link>

        <title>BitApps</title>
      </Head>

      <Header />
      <HeroSection />
      <Main />
      <Footer />
      <ScrollUpArrow />

      {/* <Script async src="/scripts/validate.js" /> */}
      <Script
        async
        src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"
        onLoad={() => {
          glightInit();
        }}
      />
    </>
  );
}
