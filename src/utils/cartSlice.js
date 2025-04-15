import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartitems: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.cartitems.push({ id: Date.now(), ...action.payload });
        },
        removeProduct: (state, action) => {
            state.cartitems = state.cartitems.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
