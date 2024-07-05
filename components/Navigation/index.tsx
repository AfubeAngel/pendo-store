import React from "react";
import Link from "next/link";
import Image from "next/image";
 
export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 lg:p-8 text-black h-20 ">
      <div className="lg:text-[48px] text-3xl font-bold text-green-900 kavoon-font">pendo</div>
      <div className="flex space-x-4">
        <ul className="flex gap-4">
          <li className="p-6 text-2xl">
            <Link href="/">Home</Link>
          </li>
          <li className="p-6 text-2xl">
            <Link href="/about">Shop</Link>
          </li>
          <li className="p-6 text-2xl">
            <Link href="/blog/hello-world">About</Link>
          </li>
          <li className="p-6 text-2xl">
            <Link href="/blog/hello-world">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="flex space-x-4">
        <ul className="flex gap-4 ">
          <li>
            <Link href="/">
              <Image
                src="/icons/User.svg"
                width={24}
                height={24}
                alt="search icon"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/icons/ShoppingCart.svg"
                width={24}
                height={24}
                alt="cart icon"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/icons/User.svg"
                width={24}
                height={24}
                alt="profile icon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
