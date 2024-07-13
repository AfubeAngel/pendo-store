import React from 'react';
import customershippingdetails from '@/fixtures/customershippingdetails.json';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const AddressDetails: React.FC = () => {
  const customerDetails = useSelector((state: RootState) => state.customerDetails);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Billed and shipped to:</h2>
      <p>{customerDetails.name}</p>
      <p>{customerDetails.address}</p>
      <p>{customerDetails.city}, <span>{customerDetails.country}</span></p>
      <p>{customerDetails.email}</p>
    </div>
  );
};

export default AddressDetails;
