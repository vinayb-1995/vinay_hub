import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    message: '',
    quantities: {}
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const existingProductIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingProductIndex === -1) {
                state.items.push(action.payload);
                state.quantities[action.payload.id] = 1;
                state.message = `${action.payload.productName} is added to cart`;
            } else {
                state.message = `${action.payload.productName} is added to cart`;
                state.quantities[action.payload.id] += 1;
            }
        },
        addWithQuantity(state, action) {
            const { item, quantity } = action.payload;
            const existingProductIndex = state.items.findIndex(existingItem => existingItem.id === item.id);
            if (existingProductIndex === -1) {
                state.items.push(item);
                state.quantities[item.id] = quantity;
                state.message = `${item.productName} is added to cart`;
            } else {
                state.message = `${item.productName} is already in the cart`;
                state.quantities[item.id] += quantity;
            }
        },
        clearMessage(state) {
            state.message = '';
        },
        remove(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
            // delete state.quantities[action.payload]; // Remove the quantity entry
        },
        incrementQuantity(state, action) {
            if (state.quantities[action.payload] !== undefined) {
                state.quantities[action.payload]++;
            }
        },
        decrementQuantity(state, action) {
            if (state.quantities[action.payload] !== undefined && state.quantities[action.payload] > 1) {
                state.quantities[action.payload]--;
            }
        }
    }
});

export const { add, addWithQuantity, clearMessage, remove, incrementQuantity, decrementQuantity } = CartSlice.actions;
export default CartSlice.reducer;
