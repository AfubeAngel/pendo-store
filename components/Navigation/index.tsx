import React, { useState } from "react";
import NavLinks from "./navlinks";
import NavIcons from "./navicons";
import Image from 'next/image';


const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex xl:gap-[223px] items-center p-4 lg:px-8 text-black h-20 justify-between 2xl:justify-center 2xl:gap-[320px] bg-gray-100 ">
      <div className="lg:text-[40px] text-3xl font-normal text-primarycolor kavoon-font">
        pendo
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu}>
        <Image
          src="/icons/mobileMenu.svg"
          width={20}
          height={20}
          alt="cart icon"
        />
        </button>
      </div>

      <div className='hidden lg:flex gap-[179px] '>
        <NavLinks />
        <NavIcons />
      </div>
    </nav>
  );
};

export default Nav;
