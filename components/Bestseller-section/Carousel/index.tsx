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
      interval={2000}
      infiniteLoop={true}
      centerSlidePercentage={90}
      centerMode={true}
    >
      {items.map((item, index) => (
        <div key={index} className="relative w-full pr-6">
          <img src={item.imageSrc} alt={item.title} className="w-full lg:max-w-full" />
          <div className="absolute flex flex-col items-start left-[83px] bottom-[28px] 
          transform -translate-y-1/2 bg-opacity-50 text-white max-w-[518px] mx-h-[484px] ">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-start">{item.subtext}</p>
          </div>
        </div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
