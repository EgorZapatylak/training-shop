import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Список товаров
        isCartOpen: false, // Состояние открытия корзины
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(
                i => i.id === item.id && i.size === item.size && item.color === i.color
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...item, quantity: 1});
            }
        },
        removeFromCart: (state, action) => {
            const {id, size, color} = action.payload;
            state.items = state.items.filter((item) => item.id !== id || item.size !== size || item.color !== color);
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
        openCart: (state) => {
            state.isCartOpen = true;
        },
        closeCart: (state) => {
            state.isCartOpen = false
        }
    },
});

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, closeCart, openCart} = cartSlice.actions;
// export const {action} = cartSlice;
export default cartSlice.reducer;