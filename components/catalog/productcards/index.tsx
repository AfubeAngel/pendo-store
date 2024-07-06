import React from 'react';
import Image from "next/image";
import StarRating from '../starRating';

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  productDetail: string;
  starRating: number;
  price: string;
  isNew?: boolean; 
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, productName, productDetail, starRating, price, isNew }) => {
  return (
    <div className="bg-[#FAFAFA] flex flex-col gap-4 shadow-md rounded-lg p-4 ">
      <div className="relative">
        <Image
          src={imageSrc}
          width={1000}
          height={1000}
          alt={productName}
          className="w-full object-cover mb-4"
        />
        {isNew && (
          <Image
            src="/icons/new.svg" 
            width={45}
            height={45}
            alt="New"
            className="absolute top-[21px] left-6"
          />
        )}
        <button className="absolute top-[21px] right-6 bg-transparent border-none">
          <Image
            src="/icons/wishlist.svg" 
            width={40}
            height={40}
            alt="Add to Wishlist"
          />
        </button>
      </div>
    <div className='flex flex-col gap-2'>
      <h3 className="text-lg font-medium tracking-wider">{productName}</h3>
      <StarRating starRating={starRating} />
      <p className="text-sm font-normal tracking-wider">{productDetail}</p>
      <p className="text-base font-semibold tracking-wider">N{price}</p>
    </div>
    </div>
  );
};

export default ProductCard;
