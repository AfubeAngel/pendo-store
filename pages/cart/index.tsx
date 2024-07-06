import React from 'react';
import CartItem from '@/components/cartitems';
import cartitems from '@/fixtures/cartitems.json';
import CartSummary from '@/components/cartpricesummary';

const Cart: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {cartitems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <CartSummary />
      </div>
    </section>
  );
};

export default Cart;
