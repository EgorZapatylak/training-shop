import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {closeCart, decreaseQuantity, increaseQuantity, removeFromCart} from "../../cartSlice";
import './Cart.css'
import {useNavigate} from "react-router-dom";

export function Cart() {

    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleBackToShopping = () => {
        dispatch(closeCart()); // Закрываем корзину
        navigate('/');  // Возврат на главную страницу
    }

    const handleViewCart = () => {
        dispatch(closeCart()); // Закрываем корзину
        navigate('/product/1');  // Возврат на страницу товара
    }

    return (
        <div className='cart'>
            <div className='cart_header'>
                <p>SHOPPING CART</p>
                <img className='filter_img_close' alt='' onClick={() => dispatch(closeCart())}/>
            </div>
            {cartItems.length === 0 ? (
                <div className='empty_cart'>
                    <p>Sorry, your cart is empty</p>
                    <button className='back_to_shopping' onClick={handleBackToShopping}>BACK TO SHOPPING</button>
                </div>
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
                                    <img src={item.image} alt={item.name} width='100'/>
                                    <p>{item.name}</p>
                                    <div>
                                        <p>{item.color}</p>
                                        <p>{item.size}</p>
                                    </div>
                                    <div className='cart_item_price'>
                                        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                        <h3>${totalPrice.toFixed(2)}</h3>
                                        <button onClick={() => dispatch(removeFromCart({
                                            id: item.id,
                                            color: item.color,
                                            size: item.size
                                        }))}>Удалить
                                        </button>
                                    </div>
                                    <div className='line'></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='cart_button'>
                        <button>FURTHER</button>
                        <button onClick={handleViewCart}>VIEW CART</button>
                    </div>
                </>
            )}
        </div>
    );
}