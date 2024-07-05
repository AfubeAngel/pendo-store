import React from 'react'
import Image from "next/image";


export default function Hero() {
  return (
    <section className="w-full flex flex-col gap-8 xl:gap-[175px] md:flex-row justify-center items-center px-8 xl:px-[120px] ">
    <div className="md:max-w-[420px] ">
      <h1 className="text-[48px] font-bold">Serengeti Chair</h1>
      <p className="mt-4 text-[18px] ">Crafted with premium materials and meticulous design, embrace luxury and ergonomic mastery for a seating experience that celebrates African heritage sophistication and comfort in your home.</p>
      <button className="mt-4 p-4 bg-green-900 font-medium text-base text-white lg:mt-16 flex gap-4 items-center rounded w-[150px] h-14">
        Buy Now
        <Image
          src="/icons/ChevronRightOutline.svg"
          width={24}
          height={24}
          alt="right-arrow"
      />
      </button>
    </div>
    <div className="lg:w-[578px] lg:h-[605px] lg:mt-[116px]">
    <Image
      src="/images/hero-product.png"
      width={1000}
      height={1000}
      alt="herosection-product"
  />

  </div>
  </section>
  )
}
