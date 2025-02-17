import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../../training-shop/src/cartSlice'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});