import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { navigateTo } from "components/Layout/ThemeProvider";
import Link from 'next/link';
import Button from 'components/UI/Button';

export function Footer({
}) {
 
  return (
    <div 
      className="px-7.5 wide:px-10 py-10 wide:pt-20 grid grid-cols-5 wide:grid-cols-12 gap-7.5 wide:gap-10"
    >
      <div
        className='col-span-5 wide:col-start-1 wide:col-span-6 space-y-5 wide:space-y-10'
      >
        <div
          className='grid grid-cols-5 wide:flex wide:flex-col'
        >
          <div
            className='space-y-1 col-start-1 col-span-2'
          >
            <h3
              className='text-14 wide:text-18'
            >
              Contact
            </h3>
          </div>
          <div
            className='col-start-3 col-span-3'
          >
            <p
              className='text-12 wide:text-14 opacity-50 uppercase'
            >
              info@scaledatacenters.com
            </p>
            <p
              className='text-12 wide:text-14 opacity-50'
            >
              888-639-5838
            </p>
          </div>
        </div>
        <div
          className='col-span-5 wide:col-start-1 wide:col-span-6 space-y-1 grid grid-cols-5 wide:flex wide:flex-col'
        >
          <div
            className='space-y-1 col-start-1 col-span-2'
          >
            <h3
              className='text-14 wide:text-18'
            >
              Headquarter
            </h3>
          </div>
          <div
            className='col-start-3 col-span-3'
          >
            <p
              className='text-12 wide:text-14 opacity-50 uppercase'
            >
              3838 Oak Lawn Ave Ste 1000
            </p>
            <p
              className='text-12 wide:text-14 opacity-50'
            >
              Dallas, TX 75219
            </p>
          </div>
        </div>
        <div
          className='col-span-5 wide:col-start-1 wide:col-span-6 space-y-1 grid grid-cols-5 wide:flex wide:flex-col'
        >
          <div
            className='space-y-1 col-start-1 col-span-2'
          >
            <h3
              className='text-14 wide:text-18'
            >
              Follow
            </h3>
          </div>
          <div
            className='col-start-3 col-span-3'
          >
            <p
              className='text-12 wide:text-14 opacity-50 uppercase'
            >
              LinkedIn
            </p>
          </div>
        </div>
      </div>
      <div
        className='pt-5 wide:pt-0 col-span-5 wide:col-start-7 wide:col-span-6'
      >
        <ul className="flex flex-col space-y-5">
          <li>
            <Link href="/" className="text-24 wide:text-40 hover:opacity-60 transition-all duration-300">Company</Link>
          </li>
          <li>
            <Link href="/locations" className="text-24 wide:text-40 hover:opacity-60 transition-all duration-300">Locations</Link>
          </li>
          <li>
            <Link href="/" className="text-24 wide:text-40 hover:opacity-60 transition-all duration-300">Careers</Link>
          </li>
          <li>
            <Link href="/contact" className="text-24 wide:text-40 hover:opacity-60 transition-all duration-300">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="mt-10 wide:mt-60 h-auto wide:h-40 w-full col-span-5 wide:col-span-12 flex justify-center">
        <Image
          src={'/assets/logo-footer.svg'}
          alt="Logo"
          width={165}
          height={30}
          onClick={() => navigateTo('/')}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className='col-span-3 wide:col-span-6 col-start-1'
      >
        <p 
          className='text-12 wide:text-14 opacity-50'
        >
          2025 © Scale Datecenters LLC
       </p>
      </div>
      <div
        className='col-span-2 wide:col-span-4 col-start-4 wide:col-start-7 flex justify-end wide:justify-start'
      >
       <p 
          className='text-12 wide:text-14 opacity-50'
        >
          Made in America
       </p>
      </div>
      <div
        className='hidden wide:flex col-start-11 col-span-2 justify-end'
      >
       <p 
          className='opacity-50'
        >
          189.175.58.6
       </p>
      </div>
     
    </div>
  );

  
}

export default Footer;
