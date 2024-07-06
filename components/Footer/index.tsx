import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col xl:gap-[115px] bg-primarycolor text-white py-8 xl:pl-[121px] xl:pr-[155px] xl:pt-[103px] ">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row xl:gap-[166px] ">
        {/* Left Section */}
        <div className="lg:max-w-[483px] mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold">Pendo</h2>
          <p className="mt-2">
          At Pendo, we blend the rich heritage of African craftsmanship with modern comfort, creating furniture that tells a story. Each piece is thoughtfully designed to bring the warmth and beauty of Africa into your home, prioritizing both elegance and sustainability.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" aria-label="Facebook">
              <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 flex xl:gap-16 ">
          <div>
            <h3 className="text-lg font-semibold mb-2">Shop</h3>
            <ul>
              <li><Link href="/category/sofas">Bestsellers</Link></li>
              <li><Link href="/category/chairs">Catalog</Link></li>
              <li><Link href="/category/tables">Cart</Link></li>
              <li><Link href="/category/beds">Armless chairs</Link></li>
              <li><Link href="/category/tables">Sofas</Link></li>
              <li><Link href="/category/beds">Slipper chairs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/location">Location</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li><Link href="/faq">Privacy</Link></li>
              <li><Link href="/customer-care">Terms and conditions</Link></li>
              <li><Link href="/policy">FAQs</Link></li>
              <li><Link href="/policy">Login</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Pendo Furniture. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
