import React, { useState } from 'react';
import Image from "next/image";

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

  return (
        <div className="flex justify-between py-4 border-b w-full">
          <div className="flex space-x-3 lg:space-x-4 ">
            <Image src={imageSrc} alt={productName} width={100} height={100} className="w-[100px] h-[100px] object-cover" />
            <div className='flex flex-col justify-end'>
              <h3 className="text-lg font-semibold">{productName}</h3>
              <p className="text-sm font-normal">{productDetail}</p>
            </div>
          </div>
        <p className="text-lg font-semibold self-end">N{price}</p>
        </div>
  );
};

export default AllProductCard;
