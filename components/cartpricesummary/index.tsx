import React from 'react';
import cartSummary from '@/fixtures/cartSummary.json';
import { useRouter } from 'next/router';

const CartSummary: React.FC = () => {
    const router = useRouter();
    const subtotal = cartSummary.subtotal;
    const tax = subtotal * cartSummary.taxRate;
    const shipping = cartSummary.shipping;
    const total = subtotal + tax + shipping;

  const handleContinueToPayment = () => {
    router.push('/checkout');
  };

  const handleContinueShopping = () => {
    router.push('/');
  };

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg xl:w-[439px] ">
      <div className="flex justify-between items-center border-b pb-2">
        <p className="text-lg">Subtotal:</p>
        <p className="text-lg">${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center border-b py-2">
        <p className="text-lg">Tax:</p>
        <p className="text-lg">${tax.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center border-b py-2">
        <p className="text-lg">Shipping:</p>
        <p className="text-lg">${shipping.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center pt-2">
        <p className="text-xl font-bold">Total:</p>
        <p className="text-xl font-bold">${total.toFixed(2)}</p>
      </div>

      <div className="mt-8 flex justify-between">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600" onClick={handleContinueShopping}>Continue Shopping</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={handleContinueToPayment}>Continue to payment</button>
      </div>
    </div>
  );
};

export default CartSummary;
