import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
      autoPlay={true}
      interval={3000} // Adjust interval as needed (in milliseconds)
      infiniteLoop={true}
    >
      {items.map((item, index) => (
        <div key={index} className="relative flex gap-4 justify-start w-full">
          <img src={item.imageSrc} alt={item.title} className="w-full lg:max-w-[1118px] lg:h-[484px] " />
          <div className="absolute left-[43px] bottom-[-43px] transform -translate-y-1/2 bg-opacity-50 text-white max-w-[518px] ">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2">{item.subtext}</p>
          </div>
        </div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
