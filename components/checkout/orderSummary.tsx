import React from 'react';
import cartitems from '@/fixtures/cartitems.json';
import Image from 'next/image';

const OrderSummary: React.FC = () => {
  return (
    <div className="mb-6">
      {cartitems.map((item) => (
        <div key={item.id} className="flex justify-between items-center py-4 border-b w-full">
          <div className="flex items-center space-x-[50px] ">
            <Image src={item.image} alt={item.name} width={50} height={50} className="w-12 h-12 object-cover" />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500">Qty: 1</p>
            </div>
          </div>
          <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderSummary;


//   return (
//     <section className="flex justify-between items-center py-4 border-b">
//       <div className="flex items-center space-x-[50px]">
//         <Image src={item.image} alt={item.name} width={100} height={100} className="w-24 h-24 object-cover" />
//         <div>
//           <h3 className="text-lg font-semibold">{item.name}</h3>
//           <p className="text-gray-500">{item.details}</p>
//           <p>In Stock</p>
//           <div className='flex gap-2'>
//           <Image src="/icons/wishlist.svg" alt="Wishlist icon" width={24} height={24} />
//           <p>{item.quantity}</p>
//           <Image src="/icons/wishlist.svg" alt="Wishlist icon" width={24} height={24} />
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col gap-6 items-center">
//         <p className="text-lg font-semibold">N{item.price}</p>
//         <div className='flex gap-1'>
//         <button aria-label="Add to wishlist" className='flex'>
//         <Image src="/icons/wishlist.svg" alt="Wishlist icon" width={24} height={24} />
//         <p className="text-blue-500">Save for later</p>
//         </button>
//         <p>|</p>
//         <button aria-label="Add to wishlist" className='flex'>
//         <Image src="/icons/wishlist.svg" alt="Wishlist icon" width={24} height={24} />
//         <p className="text-red-500">Remove</p>
//         </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CartItem;
