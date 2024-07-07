import React from 'react';
import CartItem from '@/components/cartitems';
import cartitems from '@/fixtures/cartitems.json';
import CartSummary from '@/components/cartpricesummary';
import Image from "next/image";
import { useRouter } from 'next/router';


const Cart: React.FC = () => {
  const router = useRouter();
  const backHome = () => {
    router.push('/');
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className='flex items-center gap-8 '>
      <button onClick={backHome}>
      <Image
        src="/icons/ChevronLeftOutline.svg"
        width={40}
        height={40}
        alt="leftarrow"
      />
      </button>
      <h1 className="text-base lg:text-[32px] font-semibold ">Shopping Cart</h1>
      </div>
      <hr className='mt-4 lg:mt-[55px] mb-[53px] lg:mb-10 '/>
      <div className="space-y-4">
        {cartitems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex md:justify-end mt-[71px] lg:mt-[108px] mb-[265px] lg:mb-[344px] ">
        <CartSummary />
      </div>
    </section>
  );
};

export default Cart;
