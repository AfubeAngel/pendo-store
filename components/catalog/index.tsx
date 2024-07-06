import React, { useState }  from 'react';
import ProductCard from '../catalog/productcards';
import products from '../../fixtures/productdetails.json';
import FilterUI from './filterui';
import Modal from '../modal';

const Catalog: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const mobileProducts = products.slice(0, 5);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };
  
  return (
    <div className="container mt-[28px] mb-[74.5px] lg:mb-[215px] lg:mx-auto ">
      <div className="flex justify-between mb-[31.5px] lg:mb-[107px] ">
        <h2 className="text-lg lg:text-[32px] tracking-wider font-normal ">Catalog</h2>
        <div className='hidden lg:flex'>
        <FilterUI />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2 px-4 lg:px-[21.5px]">
      {mobileProducts.map((product: any) => (
        <div key={product.id} onClick={() => openModal(product)}>
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            productName={product.productName}
            starRating={product.starRating}
            price={product.price}
            productDetail={product.productDetail}
            isNew={product.isNew}
          />
          </div>
        ))}
        {products.slice(5).map((product: any) => (
          <div className="hidden md:block" key={product.id} onClick={() => openModal(product)}>
            <ProductCard
              imageSrc={product.imageSrc}
              productName={product.productName}
              starRating={product.starRating}
              price={product.price}
              productDetail={product.productDetail}
              isNew={product.isNew}
            />
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct || {}} />

    </div>
  );
};

export default Catalog;
