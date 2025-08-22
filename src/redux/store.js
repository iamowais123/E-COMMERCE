import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./productSlice";
import cartReducer from "./cartSlice";
import wishListReducers from "./wishlistSlice";

export const store = configureStore({
    reducer : {
        products : productreducer,
        cart : cartReducer,
        wishList : wishListReducers,
    },
})

