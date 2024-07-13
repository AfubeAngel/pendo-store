import React from 'react';
import cartitems from '@/fixtures/cartitems.json';
import Image from 'next/image';

const OrderSummary: React.FC = () => {
  return (
    <section>
      <h3 className='text-xl font-semibold mb-8'>Order summary</h3>
    <div className="mb-[72px] lg:mb-[83px]">
      {cartitems.map((item) => (
        <div key={item.id} className="flex justify-between py-4 border-b w-full">
          <div className="flex space-x-[50px] ">
            <Image src={item.image} alt={item.name} width={100} height={100} className="w-[100px] h-[100px] object-cover" />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm font-medium text-[#128E1E] ">Qty: 1</p>
            </div>
          </div>
          {/* <div className="flex flex-col gap-6 items-start "> */}
        <p className="text-lg font-semibold">N{item.price}</p>
      {/* </div>           */}
        </div>
      ))}
    </div>
    </section>
  );
};

export default OrderSummary;
