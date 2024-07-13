import React from 'react';
import cartitems from '@/fixtures/cartitems.json';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const OrderSummary: React.FC = () => {
  const orderSummaryItems = useSelector((state: RootState) => state.cartsummary.orderSummary);

  return (
    <section>
      <h3 className='text-xl font-semibold mb-8'>Order summary</h3>
    <div className="mb-[72px] lg:mb-[83px]">
    {orderSummaryItems.length === 0 ? (
          <p>No items in order summary</p>
        ) : (
          orderSummaryItems.map((item) => {
            const price = parseFloat(item.price.replace(/,/g, ''));
            const subTotal = (price * item.quantity).toFixed(2);

            return (
              <div key={item.id} className="flex justify-between py-4 border-b w-full">
                <div className="flex space-x-[50px] ">
                  <Image src={item.image} alt={item.name} width={100} height={100} className="w-[100px] h-[100px] object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm font-medium text-[#128E1E]">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-lg font-semibold">
                  <p>N{item.price}</p>
                  <p><span className="text-lg font-normal">Subtotal: </span>N{subTotal}</p>
                </div>
              </div>
            );
          })
        )}
    </div>
    </section>
  );
};

export default OrderSummary;
