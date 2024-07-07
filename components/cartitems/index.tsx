import React from 'react';
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
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <section className="flex justify-between items-start lg:items-center pb-6 border-b">
      <div className="flex space-x-4 lg:space-x-[50px]">
        <Image src={item.image} alt={item.name} width={100} height={100} className="w-24 h-24 object-cover" />
        <div className='flex flex-col gap-2 w-[106px] lg:w-full'>
          <h3 className="text-[20px] font-medium">{item.name}</h3>
          <p className="text-sm">{item.details}</p>
          <p className="text-sm font-medium text-[#128E1E] "><span>Qty: </span>{item.quantity}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start lg:items-center">
        <p className="text-lg font-semibold">N{item.price}</p>
        <div className='hidden lg:flex gap-1'>
        <button aria-label="Add to wishlist" className='flex gap-4'>
        <Image src="/icons/delete-trash.svg" alt="delete icon" width={24} height={24} />
        <p className="font-base font-medium">Delete</p>
        </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
