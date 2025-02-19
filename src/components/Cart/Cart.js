import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {closeCart, decreaseQuantity, increaseQuantity, removeFromCart} from "../../cartSlice";
import  styles from "./Cart.module.css"
import {useNavigate} from "react-router-dom";

export function Cart() {

    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalCartPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleBackToShopping = () => {
        dispatch(closeCart()); // Закрываем корзину
        navigate('/');  // Возврат на главную страницу
    }

    const handleViewCart = () => {
        dispatch(closeCart()); // Закрываем корзину
        navigate('/product/1');  // Возврат на страницу товара
    }

    return (
        <div className={styles.cart}>
            <div className={styles.cart_header}>
                <p>SHOPPING CART</p>
                <img className='filter_img_close' alt='' onClick={() => dispatch(closeCart())}/>
            </div>
            {cartItems.length === 0 ? (
                <div className={styles.empty_cart}>
                    <p>Sorry, your cart is empty</p>
                    <button className={styles.back_to_shopping} onClick={handleBackToShopping}>BACK TO SHOPPING</button>
                </div>
            ) : (
                <>
                    <div className={styles.cart_road}>
                        <span>Item in Cart</span>
                        <span>Item in Cart</span>
                        <span>Item in Cart</span>
                    </div>
                    <div className={styles.cart_item}>
                        <ul>
                            {cartItems.map(item => (
                                <li key={`${item.id} - ${item.size} - ${item.color}`}>
                                    <div className={styles.cart_item_img}>
                                        <img src={item.image} alt={item.name} width='100'/>
                                    </div>
                                    <div>
                                        <div className={styles.cart_item_info}>
                                            <p>{item.name}</p>
                                            <p>{item.color}</p>
                                            <p>{item.size}</p>
                                        </div>
                                        <div className={styles.cart_item_price}>
                                            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                            <h3>${(item.price * item.quantity).toFixed(2)}</h3>
                                            <button onClick={() => dispatch(removeFromCart({
                                                id: item.id,
                                                color: item.color,
                                                size: item.size
                                            }))}>Удалить
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.cart_total_price}>
                        <h2>Total: ${totalCartPrice.toFixed(2)}</h2>
                    </div>
                    <div className={styles.cart_button}>
                        <button>FURTHER</button>
                        <button onClick={handleViewCart}>VIEW CART</button>
                    </div>
                </>
            )}
        </div>
    );
}