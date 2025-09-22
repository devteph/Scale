import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import localFont from 'next/font/local';

const Roboto = localFont({
  src: [
    {
      path: '../../../public/fonts/Roboto/RobotoMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export function Footer() {
  const router = useRouter();

  const handleNavigation = (path) => {
    if (router.pathname === path) {
      // Si ya estamos en la misma página, forzamos scroll al top
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      // Si vamos a otra página, deshabilitamos scroll automático de Next.js
      router.push(path, undefined, { scroll: false }).then(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
    }
  };
  return (
    <div className="px-7.5 wide:px-10 pt-10 pb-28 wide:pt-20 wide:pb-10 grid grid-cols-5 wide:grid-cols-12 gap-7.5 wide:gap-10">
      {/* Contacto */}
      <div className="col-span-5 wide:col-start-1 wide:col-span-6 space-y-5 wide:space-y-10">
        <div className="grid grid-cols-5 wide:flex wide:flex-col">
          <div className="space-y-1 col-start-1 col-span-2">
            <h3 className="text-14 wide:text-18">Contact</h3>
          </div>
          <div className="col-start-3 col-span-3">
            <p className={`text-12 wide:text-14 opacity-50 uppercase ${Roboto.className}`}>
              info@scaledatacenters.com
            </p>
            <p className={`text-12 wide:text-14 opacity-50 ${Roboto.className}`}>
              +1 (888) 639-5838
            </p>
          </div>
        </div>

        {/* Headquarters */}
        <div className="col-span-5 wide:col-start-1 wide:col-span-6 space-y-1 grid grid-cols-5 wide:flex wide:flex-col">
          <div className="space-y-1 col-start-1 col-span-2">
            <h3 className="text-14 wide:text-18">Headquarters</h3>
          </div>
          <div className="col-start-3 col-span-3">
            <p className={`text-12 wide:text-14 opacity-50 uppercase ${Roboto.className}`}>
              3838 Oak Lawn Ave Ste 1000
            </p>
            <p className={`text-12 wide:text-14 opacity-50 uppercase ${Roboto.className}`}>
              Dallas, TX 75219
            </p>
          </div>
        </div>
      </div>

      {/* Menú */}
      <div className="pt-5 wide:pt-0 col-span-5 wide:col-start-7 wide:col-span-6">
        <ul className="relative flex flex-col space-y-5">
          <li>
            <button
              // href="/"
              onClick={() => handleNavigation("/")}
              className="text-24 wide:text-40 hover:opacity-60 transition-all duration-300"
            >
              Home
            </button>
          </li>
          <li>
            <button
              // href="/contact"
              onClick={() => handleNavigation("/contact")}
              className="text-24 wide:text-40 hover:opacity-60 transition-all duration-300"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <div className="mt-10 wide:mt-60 h-auto 2xl:min-h-40 w-full col-span-5 wide:col-span-12 flex justify-center">
        <Image
          src={'/assets/logo-footer.svg'}
          alt="Logo"
          width={165}
          height={30}
          onClick={() => router.push('/')}
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>

      {/* Footer bottom */}
      <div className="col-span-3 wide:col-span-6 col-start-1">
        <p className="text-12 wide:text-14 opacity-50">2025 © Scale Datacenters LLC</p>
      </div>
      <div className="flex col-start-4 wide:col-start-7 col-span-2 wide:col-span-6 justify-end">
        <p className="text-12 wide:text-14 opacity-50">Made in America</p>
      </div>
    </div>
  );
}

export default Footer;
