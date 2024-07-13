import React from 'react';
import Link from 'next/link';

const NavLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <ul className="flex gap-4">
        <li className="p-6 text-base">
          <Link className='px-4 hover:underline hover:text-primarycolor' href="/">Home</Link>
        </li>
        <li className="p-6 text-base">
          <Link className='px-4 hover:underline hover:text-primarycolor' href="/allproducts">Shop</Link>
        </li>
        <li className="p-6 text-base">
          <Link className='px-4 hover:underline hover:text-primarycolor' href="/">About</Link>
        </li>
        <li className="p-6 text-base">
          <Link className='px-4 hover:underline hover:text-primarycolor' href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
