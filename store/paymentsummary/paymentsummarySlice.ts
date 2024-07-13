import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentSummaryState {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

const initialState: PaymentSummaryState = {
  subtotal: 0,
  tax: 0,
  shipping: 0,
  total: 0,
};

const paymentsummarySlice = createSlice({
  name: 'paymentsummary',
  initialState,
  reducers: {
    setPaymentSummary: (state, action: PayloadAction<PaymentSummaryState>) => {
      state.subtotal = action.payload.subtotal;
      state.tax = action.payload.tax;
      state.shipping = action.payload.shipping;
      state.total = action.payload.total;
    },
  },
});

export const { setPaymentSummary } = paymentsummarySlice.actions;

export default paymentsummarySlice.reducer;
