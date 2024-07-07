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
              <p className="text-gray-500">Qty: 1</p>
            </div>
          </div>
          <p className="text-lg font-semibold">N{item.price}</p>
          
        </div>
      ))}
    </div>
    </section>
  );
};

export default OrderSummary;
