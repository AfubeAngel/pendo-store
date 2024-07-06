import React from 'react';
import Link from 'next/link';

const NavLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <ul className="flex gap-4">
        <li className="p-6 text-base">
          <Link className='px-4' href="/">Home</Link>
        </li>
        <li className="p-6 text-base">
          <Link className='px-4' href="/shop">Shop</Link>
        </li>
        <li className="p-6 text-base">
          <Link className='px-4' href="/about">About</Link>
        </li>
        <li className="p-6 text-base">
          <Link className='px-4' href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
