import React from 'react';
import Image from 'next/image';
import { navigateTo } from "components/Layout/ThemeProvider";
import Link from 'next/link';
import Button from 'components/UI/Button';

const Navbar = ({
  logo = 'black',
  links = 'black', 
  type = 'secondary', 
}) => {
  const linkClass = `text-16 ${
    links === 'white' ? 'text-white' : 'text-black'
  } hover:opacity-60 transition-all duration-300`;

  return (
    <div 
      className="relative h-auto"
    >
      <div 
        className="absolute top-0 left-0 px-7.5 wide:px-10 w-full h-28 grid grid-cols-5 wide:grid-cols-12 gap-7.5 wide:gap-10 flex items-center z-20"
      >
        
        {/* Logo */}
        <div 
          className="col-span-3"
        >
          <div 
            className="w-58 h-full cursor-pointer flex justify-start"
          >
            <Image
              src={
                logo === 'white'
                  ? '/assets/logo-white.svg'
                  : '/assets/logo-black.svg'
              }
              alt="Logo"
              width={165}
              height={30}
              onClick={() => navigateTo('/')}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Links */}
        <div 
          className="hidden wide:flex col-start-7 col-span-5"
        >
          <ul 
            className="flex space-x-6"
          >
            <li>
              <Link href="/" className={linkClass}>Company</Link>
            </li>
            <li>
              <Link href="/locations" className={linkClass}>Locations</Link>
            </li>
            <li>
              <Link href="/" className={linkClass}>Careers</Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Botón */}
        <div 
          className="hidden wide:flex col-start-12 col-span-1"
        >
          <Button
            type={type}
            label="Log in"
            onClick={() => navigateTo('/login')}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
