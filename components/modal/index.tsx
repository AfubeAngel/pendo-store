import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    imageSrc: string;
    productName: string;
    productDetail: string;
    starRating: number;
    price: string;
    isNew?: boolean;
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
      <div className="bg-white p-4 rounded-lg w-full max-w-3xl">
        <div className="flex flex-col lg:flex-row gap-4 relative">
          <div className="flex-1 ">
            <button onClick={onClose} className="absolute right-4 text-xl">✕</button>
            <img src={product.imageSrc} alt={product.productName} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h1>ARMLESS CHAIRS</h1>
            <h2 className="text-2xl font-bold">{product.productName}</h2>
            <p className="text-lg font-semibold">N{product.price}</p>
            <p className="text-lg">{product.productDetail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
