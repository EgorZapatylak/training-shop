import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Список товаров
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(
                i => i.id === item.id && i.size === item.size && i.color === i.color
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...item, quantity: 1});
            }
        },
        removeFromCart:(state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    //Удаляем товар, если количество становится 0
                    state.items = state.items.filter(i => i.id !== action.payload);
                }
            }
        },
    },
});

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;