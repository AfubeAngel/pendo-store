import React from 'react';
import ProductCard from '../catalog/productcards';
import products from '../../fixtures/productdetails.json';

const Catalog: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold xl:mb-[85px] ">Catalog</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-md mr-4"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            productName={product.productName}
            starRating={product.starRating}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
