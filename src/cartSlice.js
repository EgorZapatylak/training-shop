import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Список товаров
        isCartOpen: false, // Состояние открытия корзины
    },
    reducers: {
        addToCart: (state, action) => {
            const {id, color, size} = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === id && item.size === size && item.color === color
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart: (state, action) => {
            const {id, size, color} = action.payload;
            state.items = state.items.filter((item) => item.id !== id || item.size !== size || item.color !== color);
        },
        increaseQuantity: (state, action) => {
            const {id, color, size} = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === id && item.color === color && item.size === size
            );
            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const {id, color, size} = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === id && item.color === color && item.size === size
            );
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                //Удаляем товар, если количество становится 0
                state.items = state.items.filter((item) => item.id !== id || item.color !== color || item.size !== size);
            }
        },
        openCart: (state) => {
            state.isCartOpen = true;
        },
        closeCart: (state) => {
            state.isCartOpen = false
        },
    },
});

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, closeCart, openCart} = cartSlice.actions;
// export const {action} = cartSlice;
export default cartSlice.reducer;