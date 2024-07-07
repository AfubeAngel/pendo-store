import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '../searchbar';

const NavIcons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <ul className="flex items-center gap-4">
        <div className='hidden lg:block'>
        <SearchBar />
        </div>
        <li>
          <Link href="/cart">
              <Image
                src="/icons/ShoppingCart.svg"
                width={20}
                height={20}
                alt="cart icon"
              />
          </Link>
        </li>
        <li>
          <Link href="/profile">
              <Image
                src="/icons/User.svg"
                width={20}
                height={20}
                alt="profile icon"
              />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavIcons;
