import { createSlice } from '@reduxjs/toolkit';
import { IReduxCartProduct } from '../types';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    subtotal: 0,
  },
  reducers: {
    addProduct: (
      state: {
        quantity: number;
        products: IReduxCartProduct[];
        subtotal: number;
      },
      action: {
        payload: IReduxCartProduct;
      }
    ) => {
      // we can only mutate our state like this in @redux/toolkit but not normal redux
      state.quantity += 1; // product numbers in the cart, not about quantity of per product
      state.products.push(action.payload);
      state.subtotal += action!.payload!.price! * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
