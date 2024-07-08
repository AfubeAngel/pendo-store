import React from 'react';
import cartitems from '@/fixtures/cartitems.json';
import Image from 'next/image';

const OrderSummary: React.FC = () => {
  return (
    <section>
      <h3 className='text-xl font-semibold mb-8'>Order summary</h3>
    <div className="mb-[72px] lg:mb-[83px]">
      {cartitems.map((item) => (
        <div key={item.id} className="flex justify-between items-center py-4 border-b w-full">
          <div className="flex items-center space-x-[50px] ">
            <Image src={item.image} alt={item.name} width={50} height={50} className="w-12 h-12 object-cover" />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm font-medium text-[#128E1E] ">Qty: 1</p>
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
        </div>
      ))}
    </div>
    </section>
  );
};

export default OrderSummary;
