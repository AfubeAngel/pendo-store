import React from 'react';
import Image from 'next/image';

interface StarRatingProps {
  starRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ starRating }) => {
  const fullStar = "/icons/Star 2.svg"; 
  const maxStars = 5;  

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= starRating) {
        stars.push(
          <Image
            key={i}
            src={fullStar}
            alt="full star"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex items-center">
      {renderStars()}
    </div>
  );
};

export default StarRating;
