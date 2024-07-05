import React from 'react';
import Carousel from './Carousel';
import Link from "next/link";

const bestsellers = [
  {
    imageSrc: '/bestseller1.png',
    title: 'Savanna Sofa',
    subtext: 'Made from rich mahogany wood with tribal-inspired patterns, it invites you to embrace comfort infused with the essence of Africa.',
  },
  {
    imageSrc: '/bestseller2.png',
    title: 'Baobab Sofa',
    subtext: "Our Timber carved  sofas are not just pieces of furniture; they're crafted from sustainable tree wood, each detail carefully chosen to bring nature's warmth and beauty into your home. ",
  },
  {
    imageSrc: '/bestseller3.png',
    title: 'Zephyr Sofa',
    subtext: 'Featuring sleek ebony wood accents and luxurious leather upholstery, it combines modern elegance with traditional craftsmanship for a sophisticated living space.',
  },
];

const BestsellersSection: React.FC = () => {
  return (
    <section className=" bg-white xl:mt-[174px] xl:mb-[197px] ">
      <div className="flex justify-between items-center mb-4  xl:mb-20 xl:mx-[110px] ">
        <h2 className="text-2xl font-bold">Bestsellers</h2>
        <Link href="#" className="text-blue-500">See All</Link>
      </div>
      <Carousel items={bestsellers} />
    </section>
  );
};

export default BestsellersSection;
