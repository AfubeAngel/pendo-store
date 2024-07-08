import React, { useState } from 'react';
import Image from 'next/image';

interface CartItemProps {
  item: {
    id: number;
    image: string;
    name: string;
    details: string;
    price: string;
    quantity: number;
  };
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onDeleteItem: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onDeleteItem  }) => {

  const incrementQuantity = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const decrementQuantity = () => {
    if (item.quantity > 0) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleDelete = () => {
    onDeleteItem(item.id);
  };
  return (
    <section className="flex justify-between items-start lg:items-center pb-6 border-b">
      <div className="flex space-x-4 lg:space-x-[50px]">
        <Image src={item.image} alt={item.name} width={100} height={100} className="w-24 h-24 object-cover" />
        <div className='flex flex-col gap-2 w-[106px] lg:w-full'>
          <h3 className="text-[20px] font-medium">{item.name}</h3>
          <p className="text-sm">{item.details}</p>
          <div className='flex gap-2'>
          <button onClick={decrementQuantity}><Image src="/icons/cartMinus.svg" alt="minus icon" width={18} height={18} /></button>
          <p className="text-xl leading-8 font-normal p-1 ">{item.quantity}</p>
          <button onClick={incrementQuantity}><Image src="/icons/cartPlus.svg" alt="plus icon" width={18} height={18} /></button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start lg:items-center">
        <p className="text-lg font-semibold">N{item.price}</p>
        <div className='hidden lg:flex gap-1'>
        <button aria-label="Add to wishlist" className='flex gap-4' onClick={handleDelete}>
        <Image src="/icons/delete-trash.svg" alt="delete icon" width={24} height={24} />
        <p className="font-base font-medium">Delete</p>
        </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
