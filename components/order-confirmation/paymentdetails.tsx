import React from 'react';
import cartSummary from '@/fixtures/cartSummary.json';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const PaymentDetails: React.FC = () => {
  // const orderSummaryItems = useSelector((state: RootState) => state.cartsummary.orderSummary);
  const { subtotal, tax, shipping, total } = useSelector((state: RootState) => state.paymentsummary);

  
  // const subtotal = orderSummaryItems.reduce((acc, item) => {
  //   return acc + parseFloat(item.price.replace(/,/g, '')) * item.quantity;
  // }, 0);
      
  // const tax = subtotal * 0.1;
      
  // // Calculate shipping (15% of subtotal, free if subtotal > 100000)
  // let shipping = subtotal * 0.15;
  // if (subtotal > 80000) {
  //   shipping = 0;
  // }
      
  // const total = subtotal + tax + shipping;


  return (
    <div className="mt-8 p-4 w-full max-w-sm">
      <div className="flex justify-between items-center pb-2">
        <p className="text-lg">Subtotal</p>
        <p className="text-lg">N{subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="text-lg">Tax</p>
        <p className="text-lg">N{tax.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="text-lg">Shipping</p>
        <p className="text-lg">N{shipping.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center pt-2">
        <p className="text-xl font-bold">Total</p>
        <p className="text-xl font-bold">N{total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PaymentDetails;
