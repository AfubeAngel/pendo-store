import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';


interface CarouselItem {
  imageSrc: string;
  title: string;
  subtext: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <ResponsiveCarousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      autoPlay={true}
      interval={1000}
      infiniteLoop={true}
      centerSlidePercentage={90}
      centerMode={true}
    >
      {items.map((item:any, index:any) => (
        <div key={index} className="relative w-full pr-6">
          <Image
            src={item.imageSrc}
            width={1000}
            height={1000}
            alt={item.title}
            className="w-[328px] object-cover lg:max-w-full h-[200px] lg:h-full rounded-lg "
          />
          <div className="absolute flex flex-col gap-2 lg:gap-4 items-start left-5 bottom-[-16px] lg:left-[83px] lg:bottom-[28px] 
          transform -translate-y-1/2 bg-opacity-50 text-white max-w-[250px] lg:max-w-[518px] max-h-[484px] ">
            <h3 className="text-base lg:text-2xl font-bold tracking-wide ">{item.title}</h3>
            <p className="mt-2 text-[8px] lg:text-base font-semibold tracking-tighter lg:tracking-wide text-start ">{item.subtext}</p>
          </div>
        </div>
      ))}
  </ResponsiveCarousel>
  );
};

export default Carousel;
