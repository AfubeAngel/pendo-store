import React from 'react';
// import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
    <div>
      {items.map((item, index) => (
        <div key={index} className="relative flex justify-start items-center">
          <img src={item.imageSrc} alt={item.title} className="w-full" />
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 max-w-xs">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2">{item.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
