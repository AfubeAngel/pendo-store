import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const CheckoutTitle: React.FC = () => {
  return (
    <section className="flex items-center mb-4">
      <div >
        <Link href="/cart" className="flex items-center text-blue-500">
          <FaArrowLeft className="mr-2" />
        </Link>
      </div>
      <h1 className="text-3xl font-bold ml-4">Checkout</h1>
      <hr className="mt-4" />
    </section>
  );
};

export default CheckoutTitle;
