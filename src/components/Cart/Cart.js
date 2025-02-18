import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decreaseQuantity, increaseQuantity, removeFromCart} from "../../cartSlice";

import './Cart.css'

export function Cart ()  {

    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch()

    const totalPrice= cartItems.reduce((total, item) => total + item.price * item.quantity,0);

    return (
        <div className='cart'>
            <div className='cart_header'>
                <p>SHOPPING CART</p>
                <img className='filter_img_close' alt=''/>
            </div>
            {cartItems.length === 0 ? (
                <p>Sorry, your cart is empty</p>
            ) : (
                <>
                    <div className='cart_road'>
                        <span>Item in Cart</span>
                        <span>Item in Cart</span>
                        <span>Item in Cart</span>
                    </div>
                    <div className='cart_item'>
                        <ul>
                            {cartItems.map(item => (
                                <li key={`${item.id} - ${item.size} - ${item.color}`}>
                                    <img src={item.image} alt={item.name} width='50'/>
                                    <p>{item.name}</p>
                                    <p>Цвет: {item.color}</p>
                                    <p>Размер: {item.size}</p>
                                    <p>Цена: {item.price}</p>
                                    <p>Количествр: {item.quantity}</p>
                                    <div>
                                        <button onClick={()=>dispatch(decreaseQuantity(item.id))}>-</button>
                                        <button onClick={()=>dispatch(increaseQuantity(item.id))}>+</button>
                                    </div>
                                    <button onClick={()=>dispatch(removeFromCart(item.id))}>Удалить</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <div className='cart_button'>
                <button>FURTHER</button>
                <button>VIEW CART</button>
            </div>
        </div>
    );
}