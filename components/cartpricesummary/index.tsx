import React from "react";
import cartSummary from "@/fixtures/cartSummary.json";
import { useRouter } from "next/router";
import Image from "next/image";


const CartSummary: React.FC = () => {
  const router = useRouter();
  const subtotal = cartSummary.subtotal;
  const tax = subtotal * cartSummary.taxRate;
  const shipping = cartSummary.shipping;
  const total = subtotal + tax + shipping;

  const handleContinueToPayment = () => {
    router.push("/checkout");
  };

  const handleContinueShopping = () => {
    router.push("/");
  };

  return (
    <div className="p-4 w-[360px] xl:w-[517px] ">
      <div className="flex justify-between items-center pb-2">
        <p className="text-base">Subtotal:</p>
        <p className="text-base">N{subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="text-base">Tax:</p>
        <p className="text-base">N{tax.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="text-base">Shipping:</p>
        <p className="text-base">N{shipping.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center pt-2">
        <p className="text-base font-bold">Total:</p>
        <p className="text-base font-bold">N{total.toFixed(2)}</p>
      </div>

      <div className="mt-8 flex gap-8 justify-between">
        <button
          className="bg-white border-black flex py-[14px] lg:py-2 px-4 gap-4 items-center w-[236px] font-base tracking-wider rounded-lg h-14 text-black border"
          onClick={handleContinueShopping}
        >
          <Image
            src="/icons/leftarrow.svg"
            width={24}
            height={24}
            alt="Instagram"
            />
          Continue shopping
        </button>
        <button
          className="bg-primarycolor border-black flex py-[14px] lg:py-2 px-4 gap-4 items-center w-[236px] h-14 font-base tracking-wider text-white rounded-lg hover:text-primarycolor hover:bg-white"
          onClick={handleContinueToPayment}
          >
          Continue to payment
          <Image
                src="/icons/Vector.svg"
                width={9}
                height={9}
                alt="Instagram"
                />
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
