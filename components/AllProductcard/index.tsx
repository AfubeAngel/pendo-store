import React, { useState } from 'react';
import Image from "next/image";
import StarRating from '../catalog/starRating';

interface AllProductCardProps {
  imageSrc: string;
  productName: string;
  productDetail: string;
  starRating: number;
  price: string;
  isNew?: boolean; 
  onClick: () => void;
}

const AllProductCard: React.FC<AllProductCardProps> = ({ imageSrc, productName, productDetail, starRating, price, isNew, onClick }) => {
  
  const [isWishlist, setWishlist] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setWishlist(!isWishlist);
  };

  return (
        <div className="flex justify-between py-4 border-b w-full">
          <div className="flex space-x-6 lg:space-x-[50px] ">
            <Image src={imageSrc} alt={productName} width={100} height={100} className="w-[100px] h-[100px] object-cover" />
            <div>
              <h3 className="text-lg font-semibold">{productName}</h3>
              <p className="text-sm font-medium text-[#128E1E] ">Qty: 1</p>
            </div>
          </div>
        <p className="text-lg font-semibold">N{price}</p>
        </div>
  );
};

export default AllProductCard;
