import React, { useState } from 'react';
import CartItem from '@/components/cartitems';
import CartSummary from '@/components/cartpricesummary';
import Image from "next/image";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { deleteItem, updateQuantity } from '@/store/cart/cartSlice';


const Cart: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleDeleteItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  const backHome = () => {
    router.push('/');
  };

  return (
    <section className="container mx-auto px-4 mt-[42px] lg:mt-[127px]">
      <div className='flex items-center gap-8'>
        <button onClick={backHome}>
          <Image
            src="/icons/ChevronLeftOutline.svg"
            width={40}
            height={40}
            alt="leftarrow"
          />
        </button>
        <h1 className="text-base lg:text-[24px] font-semibold">Shopping Cart</h1>
      </div>
      <hr className='mt-4 lg:mt-[55px] mb-[53px] lg:mb-10' />
      {cartItems.length === 0 ? (
        <div className='p-0 flex flex-col gap-4 mx-auto justify-center items-center mt-[187px] lg:mt-[401px] mb-[228px] lg:mb-[545px] '>
          <h1 className=' text-[28px] font-semibold'>Your Cart is Empty!</h1>
          <p className='text-xl text-center '>Looks like you haven&apos;t added anything to your cart yet. 
          Start shopping now to see your selections here!</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onDeleteItem={handleDeleteItem}
              />
            ))}
          </div>
          <div className="flex md:justify-end mt-[71px] lg:mt-[108px] mb-[265px] lg:mb-[344px]">
            <CartSummary />
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
