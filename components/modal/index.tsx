import React from 'react';
import Image from "next/image";
import { useRouter } from "next/router";

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
    category: string;
    fullDetails: string;
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
    const router = useRouter();
    
    const goToCartPage = () => {
        router.push('/cart');
    };
    
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white px-4 rounded-lg max-w-[360px] lg:h-[334px] lg:max-w-3xl">
        <div className="flex flex-col lg:flex-row gap-4 relative">
        <button onClick={onClose} className="absolute right-1 lg:hidden top-3">
          <Image
                src="/icons/Vectorx-cancel.svg"
                width={16}
                height={16}
                alt="Instagram"
              />
          </button>
          <div className="rounded-2xl">
          <Image
                src={product.imageSrc}
                width={200}
                height={200}
                alt={product.productName}
                className="object-cover rounded-2xl pt-[55px] pb-5 lg:py-[77px] w-[328px]  lg:w-[200px] "
              />
          </div>

          <div className="border-l border-gray-300 hidden lg:block lg:mx-[47px] lg:my-4 "></div>
          <hr className='block lg:hidden ' />

          <div className="flex-1 flex flex-col py-4 lg:py-7 gap-4 relative">
          <button onClick={onClose} className="absolute hidden lg:block lg:right-7 top-10 text-xl">
          <Image
                src="/icons/Vectorx-cancel.svg"
                width={18}
                height={18}
                alt="Instagram"
              />
          </button>
            <h1 className="text-xs font-normal">{product.category}</h1>
            <h2 className="text-xl font-semibold">{product.productName}</h2>
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(product.starRating)].map((_, index) => (
                    <span key={index} className="text-yellow-500">★</span>
                    ))}
                {[...Array(5 - product.starRating)].map((_, index) => (
                    <span key={index} className="text-gray-300">★</span>
                    ))}
              </div>
            </div>
            <p className="text-lg font-semibold mr-2">N{product.price}</p>
            <p className="text-xs tracking-wide max-w-[452px] ">{product.fullDetails}</p>

            <button onClick={goToCartPage} className="mt-auto w-[138px] h-10 px-4 bg-primarycolor text-white rounded-lg flex items-center justify-between ">
              <span className="p-2 tracking-wide">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
