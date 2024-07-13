import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartSummaryItem {
  id: string;
  image: string;
  name: string;
  details: string;
  price: string;
  quantity: number;
}

interface CartSummaryState {
  items: CartSummaryItem[];
  orderSummary: CartSummaryItem[];
}

const initialState: CartSummaryState = {
  items: [],
  orderSummary: [],
};

const cartsummarySlice = createSlice({
  name: 'cartsummary',
  initialState,
  reducers: {
      clearCart(state) {
        state.items = [];
        state.orderSummary = [];
      },
    addItem: (state, action: PayloadAction<CartSummaryItem>) => {
      state.items.push(action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    saveOrderSummary: (state, action: PayloadAction<CartSummaryItem[]>) => {
      state.orderSummary = action.payload;
    },
  },
});

export const { addItem, updateQuantity, deleteItem, saveOrderSummary, clearCart } = cartsummarySlice.actions;

export default cartsummarySlice.reducer;
