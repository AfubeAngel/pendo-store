import React, { useState } from "react";
import { useRouter } from "next/router";
import NavLinks from "./navlinks";
import NavIcons from "./navicons";
import Image from 'next/image';
import Link from "next/link";


const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const goToCartPage = () => {
    router.push('/cart');
  };

  const handleNavLinkClick = () => {
    closeMenu(); 
  };

  return (
    <nav className="bg-gray-100 text-black lg:w-full h-20 lg:fixed lg:top-0 lg:z-50 flex items-center justify-between xl:gap-[223px] 2xl:justify-center 2xl:gap-[320px] p-4 lg:px-8 ">
      <div className="lg:text-[40px] text-3xl font-normal text-primarycolor kavoon-font">
        pendo
      </div>

      <div className="lg:hidden flex gap-4 items-center">
      <button>
          <Image
            src="/icons/Vectorcart.svg"
            width={20}
            height={20}
            alt="search icon"
          />
        </button>
        <button onClick={goToCartPage}>
          <Image
            src="/icons/ShoppingCart.svg"
            width={20}
            height={20}
            alt="cart icon"
          />
        </button>
        <button onClick={toggleMenu}>
        <Image
          src="/icons/mobileMenu.svg"
          width={20}
          height={20}
          alt="cart icon"
        />
        </button>
      </div>

      <div className='hidden lg:flex xl:gap-[179px] '>
        <NavLinks />
        <NavIcons />
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 right-0 bg-gray-100 p-4 shadow-md">
          <div className="flex justify-between mb-[46px] ">
            <h1 className="text-xl font-medium">Menu</h1>
            <button onClick={closeMenu}>
            <Image
              src="/icons/Vectorx-cancel.svg"
              width={12}
              height={12}
              alt="cancel"
            />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-base font-medium" onClick={handleNavLinkClick}>Home</Link>
            <Link href="/" className="text-base font-medium" onClick={handleNavLinkClick}>Shop</Link>
            <Link href="/" className="text-base font-medium" onClick={handleNavLinkClick}>About</Link>
            <Link href="/" className="text-base font-medium" onClick={handleNavLinkClick}>Contact</Link>
            <Link href="/" className="text-base font-medium" onClick={handleNavLinkClick}>Login</Link>
            <Link href="/" className="text-base font-medium" onClick={handleNavLinkClick}>Sign up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
