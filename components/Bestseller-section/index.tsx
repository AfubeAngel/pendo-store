import React from "react";
import Carousel from "./Carousel";
import Link from "next/link";
import Image from 'next/image';

const bestsellers = [
  {
    imageSrc: "/images/bestseller1.png",
    title: "Savanna Sofa",
    subtext:
      "Made from rich mahogany wood with tribal-inspired patterns, it invites you to embrace comfort infused with the essence of Africa.",
  },
  {
    imageSrc: "/images/bestseller2.png",
    title: "Baobab Sofa",
    subtext:
      "Our Timber carved  sofas are not just pieces of furniture; they're crafted from sustainable tree wood, each detail carefully chosen to bring nature's warmth and beauty into your home. ",
  },
  {
    imageSrc: "/images/bestseller3.png",
    title: "Zephyr Sofa",
    subtext:
      "Featuring sleek ebony wood accents and luxurious leather upholstery, it combines modern elegance with traditional craftsmanship for a sophisticated living space.",
  },
];

const BestsellersSection: React.FC = () => {
  return (
    <section className=" bg-white mt-[71px] xl:mt-[127px]">
      <div className="flex justify-between items-center mb-[10px] xl:mb-[46px] xl:mx-[104px] 2xl:justify-center 2xl:gap-[60rem] ">
        <h2 className="text-base lg:text-[32px] font-normal tracking-wide pl-4 2xl:pl-0 ">Bestsellers</h2>
        <Link href="/allproducts" className="flex font-base gap-2 text-black pr-4 2xl:pr-0">
          See all
          <Image
          src="/icons/rightarrow.svg"
          width={20}
          height={20}
          alt="cart icon"
        />
        </Link>
      </div>
      <Carousel items={bestsellers} />
    </section>
  );
};

export default BestsellersSection;
