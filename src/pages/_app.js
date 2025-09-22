/* eslint-disable react/prop-types */
import React from 'react';
import '@/styles/globals.css';
import Head from 'next/head';
import { ModalProvider } from 'styled-react-modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import localFont from 'next/font/local';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Alliance = localFont({
    src: [
      {
        path: '../../public/fonts/Alliance/AllianceNo2-Regular.woff2',
        weight: '400',
        style: 'normal',
      },
    ],
  })

  function MyApp({ Component, pageProps }) {
    const router = useRouter();
  
    useEffect(() => {
      const handleRouteChange = () => {
        // Esperamos un tick para que se monte todo
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }, 0);
      };
  
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => router.events.off("routeChangeComplete", handleRouteChange);
    }, [router.events]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://cdn.jsdelivr.net/npm/resumablejs@1.1.0/resumable.min.js"
      />
      <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      {/* <ModalProvider backgroundComponent={FadingBackground}> */}
      <ModalProvider>
        {/* <html lang="en"className="!scroll-smooth"> */}
        <main className={Alliance.className}>
            <Component {...pageProps} />
          </main>
        {/* </html> */}
        <ToastContainer />
      </ModalProvider>
    </>
  );
}

export default MyApp;

