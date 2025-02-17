import React, {useState} from 'react';
import './Cart.css'

export function Cart ()  {

    const [cartItems, setCartItems]=useState([])

    const totalPrice= cartItems.reduce((total, item) => total + item.price * item.quantity,0);

    const addItem = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) =>{
        setCartItems(cartItems.map(item => item.id === id ? {...item.quantity} : item));
    };

    return (
        <div className='cart'>
            <div className='cart_header'>
                <p>SHOPPING CART</p>
                <img className='filter_img_close'/>
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
                                <li key={item.id}>
                                    <p>{item.name}</p>
                                    <p>{item.price} x {item.quantity}</p>
                                    <button onClick={()=>updateQuantity(item.id,item.quantity + 1)}>+</button>
                                    <button onClick={()=>updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <button onClick={()=> removeItem(item.id)}>Удалить</button>
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