import React from "react";
import cartSummary from "@/fixtures/cartSummary.json";
import { useRouter } from "next/router";
import Image from "next/image";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { saveOrderSummary } from "@/store/cartsummary/cartsummarySlice";


const CartSummary: React.FC = () => {
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  // const cartItems = useSelector((state: RootState) => state.cart.items);

    // Calculate subtotal, tax, shipping, and total based on cart items
    const subtotal = cartItems.reduce((acc, item) => {
      return acc + parseFloat(item.price.replace(/,/g, '')) * item.quantity;
    }, 0);
  
    const tax = subtotal * 0.1;
  
    // Calculate shipping (15% of subtotal, free if subtotal > 100000)
    let shipping = subtotal * 0.15;
    if (subtotal > 80000) {
      shipping = 0;
    }
  
    const total = subtotal + tax + shipping;

  const handleContinueToPayment = () => {
    dispatch(saveOrderSummary(cartItems)); 
    router.push("/checkout");
  };

  const handleContinueShopping = () => {
    router.push("/allproducts");
  };

  return (
    <div className="p-4 w-[360px] xl:w-[517px] ">
      <div className="flex justify-between items-center pb-2">
        <p className="text-base">Subtotal</p>
        <p className="text-base">N{subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="text-base">Tax</p>
        <p className="text-base">N{tax.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="text-base">Shipping</p>
        <p className="text-base">
          {subtotal >= 100000 ? "Free" : `N${shipping.toFixed(2)}`} 
        </p>
      </div>
      <div className="flex justify-between items-center pt-2">
        <p className="text-base font-bold">Total</p>
        <p className="text-base font-bold">N{total.toFixed(2)}</p>
      </div>

      <div className="mt-[61px] lg:mt-8 flex flex-col items-center lg:flex-row gap-4 lg:gap-8 justify-between">
        <button
          className="bg-white border-black flex py-[14px] lg:py-2 px-4 gap-4 items-center w-[236px] font-base tracking-wider rounded-lg h-14 text-black border hover:bg-primarycolor "
          onClick={handleContinueShopping}
        >
          <Image
            src="/icons/Leftarrow.svg"
            width={24}
            height={24}
            alt="Instagram"
            />
          Continue shopping
        </button>
        <button
          className="bg-primarycolor border-black flex py-[14px] lg:py-2 px-4 gap-4 items-center w-[236px] h-14 font-base tracking-wider text-white rounded-lg hover:text-white hover:bg-black"
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
