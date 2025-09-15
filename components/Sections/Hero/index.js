import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export function Hero({ variant = 'HeroPrimary' }) {
    const imageSrc = variant === 'HeroPrimary'
      ? '/assets/hero.svg'
      : '/assets/hero2.svg';
  
    const text = variant === 'HeroPrimary'
      ? 'Accelerate your digital ascension.'
      : 'Build to scale with you.';
 
  return (
    <div className="w-full h-screen relative">
        <Image
            src={imageSrc}
            alt="Logo"
            width={165}
            height={30}
            onClick={() => navigateTo('/')}
            className="object-cover w-full h-full"
        />
        <div
            className={`absolute bottom-7.5 wide:bottom-10 left-7.5 wide:left-10 z-20'
                ${variant === 'HeroSecondary' ? 'max-w-[20rem] wide:max-w-[20.95rem]' : 'max-w-[20rem] wide:max-w-[30rem]'}`}
        >
            <h1
                className={`text-white 
                    ${variant === 'HeroSecondary' ? 'text-24 wide:text-30' : 'text-40 wide:text-50'}`}
                >
                 {text}
            </h1>
        </div>
    </div>
);
    }

export default Hero;
