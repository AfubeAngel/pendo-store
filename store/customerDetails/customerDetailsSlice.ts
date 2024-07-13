// customerDetailsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomerDetails {
  name: string;
  address: string;
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
}

const initialState: CustomerDetails = {
  name: '',
  address: '',
  city: '',
  country: '',
  phoneNumber: '',
  email: '',
};

const customerDetailsSlice = createSlice({
  name: 'customerDetails',
  initialState,
  reducers: {
    saveCustomerDetails(state, action: PayloadAction<CustomerDetails>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { saveCustomerDetails } = customerDetailsSlice.actions;
export default customerDetailsSlice.reducer;
