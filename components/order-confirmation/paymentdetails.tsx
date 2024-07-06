import React from 'react';
import cartSummary from '@/fixtures/cartSummary.json';
import { useRouter } from 'next/router';

const PaymentDetails: React.FC = () => {
  const router = useRouter();
  const subtotal = cartSummary.subtotal;
  const tax = subtotal * cartSummary.taxRate;
  const shipping = cartSummary.shipping;
  const total = subtotal + tax + shipping;

  return (
    <div className="mt-8 p-4 w-full max-w-sm">
      <div className="flex justify-between items-center pb-2">
        <p className="text-lg">Subtotal:</p>
        <p className="text-lg">N{subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="text-lg">Tax:</p>
        <p className="text-lg">N{tax.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="text-lg">Shipping:</p>
        <p className="text-lg">N{shipping.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center pt-2">
        <p className="text-xl font-bold">Total:</p>
        <p className="text-xl font-bold">N{total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PaymentDetails;
