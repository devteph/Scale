import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from 'components/Sections/Navbar';
import Footer from 'components/Sections/Footer';
import ImageColumn from 'components/Sections/ImageColumn'
import ImageBackgroundText from 'components/Sections/ImageBackgroundText';
import TwoColumnsContent from 'components/Sections/TwoColumsContent';

function Locations({
 
}) {
  
  return (
    <>
      <Head>
        <title>Scale</title>
        <meta name="description" content="Locations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar 
        variant="primary" 
        logo="white"
      />
      <ImageColumn/>
      <ImageBackgroundText
        imageSrc="/assets/hero.svg"
        text1="The OKC1 data center is 100% concurrently maintainable and housed in an EF5 rated 318 mph wind resistant structure with 36” raised floors and direct-to-chip liquid cooling."
        text2="The data center was engineered and certified by the Uptime Institute as a Tier III concurrently maintainable facility and designed by world famous Rand Elliott Architects. It lives in one of the most energy dense regions in the world with triple-redundant power infrastructures."
      />
      <TwoColumnsContent/>
      <Footer/>
      </>
  );
}

export default Locations;