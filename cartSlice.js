// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Initialize cart items as an empty array
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add reducers for adding items to the cart, removing items from the cart, etc.
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
