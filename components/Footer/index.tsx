import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-[66px] xl:gap-[127px] bg-primarycolor text-white py-8 pl-4 xl:pl-[121px] xl:pr-[155px] pt-[84px] xl:pt-[103px] 2xl:items-center ">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row md:gap-[54px] xl:gap-[166px] ">
        {/* Left Section */}
        <div className="md:max-w-[483px] mb-8 lg:mb-0">
          <h2 className="text-[40px] kavoon-font">Pendo</h2>
          <p className="mt-4 text-sm lg:text-base font-medium">
            At Pendo, we blend the rich heritage of African craftsmanship with
            modern comfort, creating furniture that tells a story. Each piece is
            thoughtfully designed to bring the warmth and beauty of Africa into
            your home, prioritizing both elegance and sustainability.
          </p>
          <div className="flex mt-4 space-x-4">
            <Link href="#" aria-label="Instagram">
              <Image
                src="/icons/Instagram.svg"
                width={24}
                height={24}
                alt="Instagram"
              />
            </Link>
            <Link href="#" aria-label="Pinterest">
              <Image
                src="/icons/pinterest.svg"
                width={24}
                height={24}
                alt="pinterest"
              />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Image
                src="/icons/facebook.svg"
                width={24}
                height={24}
                alt="facebook"
              />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Image
                src="/icons/twitter1.svg"
                width={24}
                height={24}
                alt="twitter"
              />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-6 lg:gap-16 ">
          <div className="">
            <h3 className="text-base font-medium mb-6">Shop</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/category/sofas">Bestsellers</Link>
              </li>
              <li>
                <Link href="/category/chairs">Catalog</Link>
              </li>
              <li>
                <Link href="/category/tables">Cart</Link>
              </li>
              <li>
                <Link href="/category/beds">Armless chairs</Link>
              </li>
              <li>
                <Link href="/category/tables">Sofas</Link>
              </li>
              <li>
                <Link href="/category/beds">Slipper chairs</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-base font-medium mb-6">Company</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/location">Location</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-base font-medium mb-6">Support</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/faq">Privacy</Link>
              </li>
              <li>
                <Link href="/customer-care">Terms and conditions</Link>
              </li>
              <li>
                <Link href="/policy">FAQs</Link>
              </li>
              <li>
                <Link href="/policy">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center px-[10px] lg:p-0">
        <p>
          &copy; {new Date().getFullYear()} Pendo Furniture. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
