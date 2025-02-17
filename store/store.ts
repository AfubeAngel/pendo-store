import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import cartsummaryReducer from './cartsummary/cartsummarySlice';
import customerDetailsReducer from './customerDetails/customerDetailsSlice';
import paymentsummaryReducer from './paymentsummary/paymentsummarySlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartsummary: cartsummaryReducer,
    customerDetails: customerDetailsReducer, 
    paymentsummary: paymentsummaryReducer,
  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
