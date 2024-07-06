import React from 'react';
import CheckoutTitle from "@/components/checkout/checkoutttitle";
import OrderSummary from "@/components/checkout/orderSummary";
import PaymentMethod from '@/components/checkout/paymentmethod';
import DeliveryDetails from '@/components/checkout/deliverydetails';
import PaymentSummary from '@/components/checkout/paymentsummary';


const CheckoutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <CheckoutTitle />
      <div className="grid grid-cols-1 gap-8">
        <div>
          <OrderSummary />
           <PaymentMethod />
          <DeliveryDetails /> 
        </div>
        <div className="flex justify-end mt-8">
          <PaymentSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

