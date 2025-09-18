import Head from 'next/head';
import Navbar from 'components/Sections/Navbar';
import Hero from 'components/Sections/Hero';
import SliderLocations from 'components/Sections/SliderLocations';
import Company from 'components/Sections/Company';
import Careers from 'components/Sections/Careers'
import Footer from 'components/Sections/Footer';
import ScrollButton from 'components/Sections/ScrollButton'
import { useRef } from "react";

function Home() {
  const blocksRef = useRef([]);
 

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
      <ScrollButton blocksRef={blocksRef}/>
      <Hero ref={(el) => (blocksRef.current[0] = el)}/>
      <Company ref={(el) => (blocksRef.current[1] = el)}/>
      <SliderLocations ref={(el) => (blocksRef.current[2] = el)}/>
      <Careers ref={(el) => (blocksRef.current[3] = el)}/>
      <Footer/>
      </>
  )
}

export default Home;
