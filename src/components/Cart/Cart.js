import React from 'react';
import './Cart.css'

export function Cart ()  {
    return (
        <div className='cart'>
            <div className='cart_header'>
                <p>SHOPPING CART</p>
                <img className='filter_img_close'/>
            </div>
            <div className='cart_road'>
                <span>Item in Cart</span>
                <span>Item in Cart</span>
                <span>Item in Cart</span>
            </div>
            <div className='cart_button'>
                <button>FURTHER</button>
                <button>VIEW CART</button>
            </div>
        </div>
    );
}