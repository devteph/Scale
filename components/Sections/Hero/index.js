import React, { forwardRef } from 'react';
import Image from 'next/image';

const Hero = forwardRef(({ variant = 'HeroPrimary', companyRef }, ref) => {
  const imageSrc =
    variant === 'HeroPrimary' ? '/assets/OKC1-HERO.jpeg' : '/assets/hero.svg';

  const text =
    variant === 'HeroPrimary'
      ? 'Accelerate your digital ascension.'
      : 'Build to scale with you.';

  const scrollToCompany = () => {
    if (companyRef?.current) {
      companyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="w-full h-screen relative">
      <Image
        src={imageSrc}
        alt="Logo"
        fill
        className="object-cover w-full h-full"
      />

      <div
        className={`absolute bottom-7.5 wide:bottom-10 left-7.5 wide:left-10 z-20
          ${variant === 'HeroSecondary'
            ? 'max-w-[20rem] wide:max-w-[20.95rem]'
            : 'max-w-[20rem] wide:max-w-[30rem]'}`}
      >
        <h1
          className={`text-white 
            ${variant === 'HeroSecondary' ? 'text-24 wide:text-30' : 'text-40 wide:text-50'}`}
        >
          {text}
        </h1>
      </div>

      {/* Botón de scroll */}
      <div className="hidden wide:flex absolute bottom-10 right-10 z-40">
        <button
          onClick={scrollToCompany}
          className="px-5 h-13 bg-white text-primary hover:opacity-80 transition-all duration-300"
        >
          Discover
        </button>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
