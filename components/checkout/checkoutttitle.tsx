import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaArrowLeft } from "react-icons/fa";

const CheckoutTitle: React.FC = () => {
  return (
    <section className="flex items-center mt-[33px] lg:mt-[136px]">
      <div>
        <Link href="/cart" className="flex items-center">
          <Image
            src="/icons/ChevronLeftOutline.svg"
            width={40}
            height={40}
            alt="Instagram"
          />
        </Link>
      </div>
      <h1 className="text-2xl font-semibold ml-4 px-w py-2 ">Checkout</h1>

    </section>
  );
};

export default CheckoutTitle;
