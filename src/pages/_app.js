/* eslint-disable react/prop-types */
import React from 'react';
import '@/styles/globals.css';
import Head from 'next/head';
import { ModalProvider } from 'styled-react-modal';
// import { FadingBackground } from 'components/Layout/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import localFont from 'next/font/local';

// const AeonikProMedium = localFont({
//     src: [
//       {
//         path: '../public/fonts/AeonikPro-Medium/AeonikPro-Medium.woff2',
//         weight: '500',
//         style: 'normal',
//       },
//     ],
//   })

function MyApp({ Component, pageProps }) {
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
          <main>
            <Component {...pageProps} />
          </main>
        {/* </html> */}
        <ToastContainer />
      </ModalProvider>
    </>
  );
}

export default MyApp;

//This is the original version of the app
// import App from 'next/app';
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

