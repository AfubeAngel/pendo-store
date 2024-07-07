import React from "react";
import Image from "next/image";

const PaymentMethod: React.FC = () => {
  return (
    <section className="lg:mb-[88px] mb-10">
      <h2 className="text-base lg:text-xl font-semibold mb-8">
        Payment Method
      </h2>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className=" flex items-center py-2">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              defaultChecked
              className="mr-4 p-2 custom-radio"
            />
            <label
              htmlFor="card"
              className="mr-4 text-sm lg:text-base font-normal"
            >
              Credit Card
            </label>
          </div>
          <div className=" flex items-center py-2">
            <input
              type="radio"
              id="pod"
              name="paymentMethod"
              value="pod"
              className="mr-4 p-2 custom-radio"
            />
            <label
              htmlFor="pod"
              className="mr-4 text-sm lg:text-base font-normal"
            >
              Pay on Delivery
            </label>
          </div>
        </div>
        <div className="flex self-start p-0 lg:space-x-6">
          <Image
            src="/icons/logos_mastercard.svg"
            alt="Mastercard"
            width={50}
            height={30}
          />
          <Image
            src="/icons/logos_visa.svg"
            alt="Visa"
            width={50}
            height={30}
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
