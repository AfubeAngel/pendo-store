import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const PaymentDetails: React.FC = () => {
  const { subtotal, tax, shipping, total } = useSelector((state: RootState) => state.paymentsummary);

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
