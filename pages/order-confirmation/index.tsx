import React from "react";
import Image from "next/image";
import OrderConfirmationSummary from "@/components/order-confirmation/orderConfirmationSummary";
import AddressDetails from "@/components/order-confirmation/Addressdetails";
import PaymentDetails from "@/components/order-confirmation/paymentdetails";

const OrderConfirmation: React.FC = () => {
  return (
    <div className="container p-4 lg:p-0 mx-auto lg:mt-[136px]">
      <div className="flex flex-col gap-6 items-center text-center ">
        <Image src="/icons/orderconfirmed.svg" width={200} height={200} alt="search icon" />
        <div className="felx flex-col gap-4">
        <h1 className="lg:text-[40px] font-normal">
        We&apos;ve got your order
        </h1>
        <p className="text-xl">We’ll let your know when it ships and headed your way</p>
        </div>
        <button className="bg-white text-base font-medium border-2 border-black text-black px-4 rounded-lg hover:text-white hover:bg-black h-10">
          Track Your Order here
        </button>
      </div>

      <hr className=" mt-[44px] lg:mt-[103px] mb-[71px] lg:mb-[91px] "/>

      <OrderConfirmationSummary />

      <hr className="mt-[66px] mb-[49px] "/>

      <div className="flex flex-col lg:flex-row justify-between mb-[197px] ">
        <AddressDetails />
        <PaymentDetails />
      </div>
    </div>
  );
};

export default OrderConfirmation;
