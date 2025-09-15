import Head from 'next/head';
import Navbar from 'components/Sections/Navbar';
import Hero from 'components/Sections/Hero';
import Image from 'next/image';
import SliderLocations from 'components/Sections/SliderLocations';
import Company from 'components/Sections/Company';
import Careers from 'components/Sections/Careers'
import Footer from 'components/Sections/Footer';

function Home({ }) {
 

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
      <Hero/>
      <Company/>
      <SliderLocations/>
      <Careers/>
      <Footer/>
      </>
  )
}

export default Home;
