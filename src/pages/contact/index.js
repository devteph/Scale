import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from 'components/Sections/Navbar';
import Footer from 'components/Sections/Footer';
import TwoColumnsForm from 'components/Sections/TwoColumsForm';

function Contact({
 
}) {
  
  return (
    <>
      <Head>
        <title>Scale</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        variant="primary" 
        logo="black"
      />
      <TwoColumnsForm/>
      <Footer/>
      </>
  );
}

export default Contact;