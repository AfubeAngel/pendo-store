import React from 'react';
import CheckoutTitle from "@/components/checkout/checkoutttitle";
import PaymentMethod from '@/components/checkout/paymentmethod';
import DeliveryDetails from '@/components/checkout/deliverydetails';
import router from 'next/router';


const CheckoutPage: React.FC = () => {
  const goToOrderSummary = () => {
    router.push('/order-summary'); 
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <CheckoutTitle />
      <hr className=" mt-[37px] lg:mt-[42px] mb-[36px] lg:mb-[46px]" />
      <div className="grid grid-cols-1 gap-8">
        <div>
           <PaymentMethod />
           <hr className='block lg:hidden mb-[48px] ' />
          <DeliveryDetails /> 
        </div>
        <hr className='block lg:hidden my-10' />
      </div>
      <button
        className="mx-auto mt-12 lg:mt-[96px] mb-[118px] lg:mb-[550px] w-[200px] lg:w-[397px] text-base font-medium bg-primarycolor text-white px-4 items-center rounded-lg h-14 flex justify-center"
        onClick={goToOrderSummary}
      >
        Continue
      </button>
    </div>
  );
};

export default CheckoutPage;

