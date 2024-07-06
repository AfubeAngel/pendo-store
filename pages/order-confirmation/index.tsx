import React from "react";
import Image from "next/image";
import OrderConfirmationSummary from "@/components/order-confirmation/orderConfirmationSummary";
import AddressDetails from "@/components/order-confirmation/Addressdetails";
import PaymentDetails from "@/components/order-confirmation/paymentdetails";

const OrderConfirmation: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-6">
        <Image src="/icons/orderconfirmed.svg" width={200} height={200} alt="search icon" />
        <h1 className="text-3xl font-bold mt-4">
        We&apos;ve got your order
        </h1>
        <p>We’ll let your know when it ships and headed your way</p>
        <button className="bg-white border-2 border-black text-black px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">
          Track Your Order here
        </button>
      </div>
      <hr className="mt-10 mb-[91px] "/>
      <OrderConfirmationSummary />
      <hr className="mt-[65px] mb-[49px] "/>
      <div className="flex justify-between mb-[197px] ">
        <AddressDetails />
        <PaymentDetails />
      </div>
    </div>
  );
};

export default OrderConfirmation;
