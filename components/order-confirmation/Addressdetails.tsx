import React from 'react';
import customershippingdetails from '@/fixtures/customershippingdetails.json';

const AddressDetails: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Billed and shipped to:</h2>
      <p>{customershippingdetails.streetAddress}</p>
      <p>{customershippingdetails.city}, <span>{customershippingdetails.country}</span></p>
      <p>{customershippingdetails.email}</p>
    </div>
  );
};

export default AddressDetails;
