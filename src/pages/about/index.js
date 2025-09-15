import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from 'components/Sections/Navbar';
import Hero from 'components/Sections/Hero'
import Footer from 'components/Sections/Footer';
import TwoColumns from 'components/Sections/TwoColums';
import ImageBackgroundText from 'components/Sections/ImageBackgroundText';
import Team from 'components/Sections/Team';

function About({
 
}) {
  
  return (
    <>
      <Head>
        <title>Scale</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Navbar
        logo="white" 
        links="white" 
        type="primary"
      />
      <Hero
        variant="HeroSecondary"
      />
      <TwoColumns/>
      <ImageBackgroundText/>
      <Team/>
      <Footer/>
      </>
  );
}

export default About;