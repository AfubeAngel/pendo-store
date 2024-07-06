import React from 'react';
import Image from 'next/image';

const PaymentMethod: React.FC = () => {
  return (
    <section className="mb-20 mt-[107px] ">
      <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
      <div className='flex justify-between'>
      <div className="flex flex-col ">
        <div>
        <input type="radio" id="card" name="paymentMethod" value="card" className="mr-2" />
        <label htmlFor="card" className="mr-4">Credit Card</label>
        </div>
        <div>
        <input type="radio" id="pod" name="paymentMethod" value="pod" className="mr-2" />
        <label htmlFor="pod" className="mr-4">Pay on Delivery</label>
        </div>
      </div>
      <div className="flex space-x-4">
        <Image src="/visa-logo.png" alt="Visa" width={50} height={30} />
        <Image src="/mastercard-logo.png" alt="Mastercard" width={50} height={30} />
      </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
