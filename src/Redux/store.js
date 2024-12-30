import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './redux'
const store = configureStore({
    reducer:{
        cart:CartReducer,
    }
})
export default store;