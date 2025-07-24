import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export function Hero({ variant = 'HeroPrimary' }) {
    const imageSrc = variant === 'HeroSecondary'
      ? '/assets/hero2.svg'
      : '/assets/hero.svg';
  
    const text = variant === 'HeroSecondary'
      ? 'Moving humanity forward through innovation.'
      : 'AI Infrastructure Powered by Clean Energy';
 
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
                ${variant === 'HeroSecondary' ? 'max-w-[20rem] wide:max-w-[20.95rem]' : 'max-w-[20rem] wide:max-w-[38rem]'}`}
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
