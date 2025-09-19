import React, { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from 'components/UI/Button';

const Navbar = ({
  logo = 'black',
  links = 'black',
  type = 'secondary',
}) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [isLocationsHovered, setIsLocationsHovered] = useState(false);

  const linkClass = links === 'white' ? 'text-white' : 'text-primary';
  const colorButton = links === 'white' ? 'text-white' : 'text-primary';

  function changeMenuState() {
    setOpenMenu(!openMenu);
  }

  const handleLinkClick = (href) => {
    if (router.pathname === href) {
      setOpenMenu(false);
    } else {
      router.push(href);
      setOpenMenu(false);
    }
  };

  return (
    <div className={`z-40 relative transition-colors duration-300`}>
      <div
        className={`absolute top-0 left-0 py-7.5 px-7.5 wide:px-10 wide:py-0 w-full z-40 ${openMenu
          ? '!fixed !h-screen p-7.5 flex flex-col justify-between bg-white pb-32'
          : 'h-6 wide:h-28 grid grid-cols-5 wide:grid-cols-12 gap-7.5 wide:gap-10 flex items-center'}`}
      >
        {/* Logo */}
        <div className="col-span-5 grid grid-cols-5 gap-x-7.5 wide:flex">
          <div className="col-span-3">
            <div className="w-full h-full cursor-pointer flex justify-start">
              <Image
                src={
                  isLocationsHovered
                    ? '/assets/logo-black.svg'
                    : openMenu
                      ? '/assets/logo-black.svg'
                      : (logo === 'white' ? '/assets/logo-white.svg' : '/assets/logo-black.svg')
                }
                alt="Logo"
                width={165}
                height={30}
                onClick={() => handleLinkClick('/')}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Button Mobile */}
          <div className="wide:hidden col-start-4 col-span-2 flex justify-end">
            <Button
              label={openMenu ? 'Close' : 'Menu'}
              onClick={changeMenuState}
              className={`${openMenu ? 'text-16 text-secondary' : colorButton}`}
            />
          </div>
        </div>

        {/* Links */}
        <div
          className={`!relative ${openMenu ? 'flex flex-col justify-end !h-full' : 'hidden wide:flex col-start-7 flex justify-end wide:gap-x-10'} col-span-6`}
        >
          <ul className={`relative flex ${openMenu ? 'flex-col pb-10' : 'space-x-6 wide:gap-x-10 wide:items-center'}`}>
            <li className={`${openMenu ? 'py-5 border-t border-borders' : ''}`}>
              <button
                onClick={() => handleLinkClick('/')}
                className={`text-left text-16 hover:opacity-60 transition-all duration-300 
                  ${openMenu ? 'text-30 text-primary' : linkClass}`}
              >
                Home
              </button>
            </li>
            {/* <li className={`${openMenu ? 'py-5 border-t border-borders' : ''}`}>
              <button
                onClick={() => handleLinkClick('/about')}
                className={`text-left text-16 hover:opacity-60 transition-all duration-300 
                  ${openMenu ? 'text-30 text-primary' : linkClass}`}
              >
                About
              </button>
            </li> */}
          </ul>

          {/* Botón */}
          <div className={`${openMenu ? 'col-span-5' : 'hidden wide:flex col-start-12 col-span-1'}`}>
            <Button
              className={`${openMenu ? '!w-full !h-13' : ''}`}
              type={openMenu ? 'secondary' : type}
              label="Contact"
              onClick={() => handleLinkClick('/contact')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
