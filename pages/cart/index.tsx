import React, { useState } from 'react';
import CartItem from '@/components/cartitems';
import CartSummary from '@/components/cartpricesummary';
import Image from "next/image";
import { useRouter } from 'next/router';

// initial cart items
const initialCartItems = [
  {
    "id": 1,
    "image": "/images/cart1.png",
    "name": "Savanna Sofa",
    "details": "Comfortable and stylish sofa",
    "price": "250,000",
    "quantity": 1
  },
  {
    "id": 2,
    "image": "/images/cart2.png",
    "name": "Baobab Sofa",
    "details": "Elegant and durable sofa",
    "price": "300,000",
    "quantity": 2
  },
  {
    "id": 3,
    "image": "/images/cart3.png",
    "name": "Logan Sofa",
    "details": "Elegant and strong sofa",
    "price": "65,000",
    "quantity": 1
  },
  {
    "id": 4,
    "image": "/images/cart4.png",
    "name": "Serengeti",
    "details": "Wool cushion with wooden base",
    "price": "65,000",
    "quantity": 1
  },
  {
    "id": 5,
    "image": "/images/cart5.png",
    "name": "Timbuktu",
    "details": "Wooden living room armchair",
    "price": "65,000",
    "quantity": 2
  }
];

const Cart: React.FC = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDeleteItem = (id: number) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
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
    </section>
  );
};

export default Cart;
