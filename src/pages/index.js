import Head from 'next/head';
import Navbar from 'components/Sections/Navbar';
import Hero from 'components/Sections/Hero';
import SliderLocations from 'components/Sections/SliderLocations';
import Company from 'components/Sections/Company';
import Careers from 'components/Sections/Careers'
import Footer from 'components/Sections/Footer';
import { useRef } from "react";

function Home() {
  const companyRef = useRef(null);

  return (
    <>
      <Head>
        <title>Scale</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        logo="white" 
        links="white" 
        type="primary"
      />
      <Hero companyRef={companyRef} />
      <Company ref={companyRef} />
      <SliderLocations/>
      <Careers/>
      <Footer/>
    </>
  )
}

export default Home;
