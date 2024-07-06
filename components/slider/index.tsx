import React, { useRef, useEffect } from 'react';
import styles from '@/styles/slider.module.css'

interface SliderProps {
  items: {
    imageSrc: string;
    title: string;
    subtext: string;
  }[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let start: number | null = null;
    const speed = 0.1; // Adjust this value for speed

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      if (slider) {
        slider.scrollLeft += progress * speed;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }

      start = timestamp;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

    return () => {
      start = null; // Cleanup
    };
  }, []);

  return (
    <div className={styles.sliderContainer} ref={sliderRef}>
      {items.map((item, index) => (
        <div className={styles.sliderItem} key={index}>
          <img src={item.imageSrc} alt={item.title} />
        <div className="absolute flex flex-col items-start left-[83px] bottom-[28px] 
          transform -translate-y-1/2 bg-opacity-50 text-white max-w-[518px] mx-h-[484px] ">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-start">{item.subtext}</p>
          </div>
        </div>
      ))}
    {/* {items.map((item, index) => (
        <div key={index} className="relative w-full pr-6">
          <img src={item.imageSrc} alt={item.title} className="w-[1230px] h-[484px] " />
          <div className="absolute flex flex-col items-start left-[83px] bottom-[28px] 
          transform -translate-y-1/2 bg-opacity-50 text-white max-w-[518px] mx-h-[484px] ">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-start">{item.subtext}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Slider;
