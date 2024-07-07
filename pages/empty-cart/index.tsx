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

      <div className='p-0 flex flex-col gap-4 mx-auto justify-center items-center mt-[187px] lg:mt-[401px] mb-[228px] lg:mb-[545px] '>
        <h1 className=' text-[28px] font-semibold'>Your Cart is Empty!</h1>
        <p className='text-xl text-center '>Looks like you haven&apos;t added anything to your cart yet. 
        Start shopping now to see your selections here!</p>
      </div>

    </section>
  );
};

export default Cart;
