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
      <hr className=" mt-[37px] lg:mt-[42px] mb-[36px] lg:mb-[46px]" />
      <div className="grid grid-cols-1 gap-8">
        <div>
          <OrderSummary />
           <PaymentMethod />
           <hr className='block lg:hidden mb-10' />
          <DeliveryDetails /> 
        </div>
        <hr className='block lg:hidden my-10' />
        <div className="flex justify-center lg:justify-end mb-[228px] lg:mb-[272px]">
          <PaymentSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

