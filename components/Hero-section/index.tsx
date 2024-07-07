import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();

  const goToCartPage = () => {
    router.push('/cart');
  };

  return (
    <section className="w-full mt-[63px] lg:mt-[187px] flex flex-col gap-[39px] xl:gap-[271px] md:flex-row justify-center items-center px-4 xl:pl-[104px] xl:pr-[99px] ">
      <div className="md:max-w-[452px] py-2 px-4">
        <h1 className="text-4xl lg:text-[50px] font-normal m-0 tracking-wide ">
          Serengeti Chair
        </h1>
        <p className="mt-4 tracking-wide text-sm lg:text-base p-0 ">
          Crafted with premium materials and meticulous design, embrace luxury
          and ergonomic mastery for a seating experience that celebrates African
          heritage sophistication and comfort in your home.
        </p>
        <button onClick={goToCartPage} className="mt-10 p-4 bg-primarycolor font-medium text-base text-white lg:mt-16 flex justify-around items-center rounded-lg w-[150px] h-14 tracking-wide">
          Buy now
          <Image
            src="/icons/right-arrow.svg"
            width={24}
            height={24}
            alt="right-arrow"
          />
        </button>
      </div>
      <Image
        src="/images/hero-product1.png"
        width={516}
        height={1000}
        alt="herosection-product"
      />
    </section>
  );
}

// className="lg:w-[516px] lg:h-[605px] lg:mt-[107px]"
