import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            // @TODO detect which item to remove and add logic here
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;