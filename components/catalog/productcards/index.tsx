import React from 'react';
import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  starRating: number;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, productName, starRating, price }) => {
  return (
    <div className="bg-[#FAFAFA] shadow-md rounded-lg p-4 mb-4">
        <Image
        src={imageSrc}
        width={1000}
        height={1000}
        alt={productName}
        className="w-full object-cover mb-4"
    />
      <h3 className="text-lg font-semibold">{productName}</h3>
      <div className="flex items-center">
        {/* Display star rating here */}
        <p className="text-gray-600">{`${starRating} stars`}</p>
      </div>
      <p className="mt-2 text-lg font-bold">${price}</p>
    </div>
  );
};

export default ProductCard;
