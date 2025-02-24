import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {closeCart, decreaseQuantity, increaseQuantity, removeFromCart} from "../../cartSlice";
import styles from "./Cart.module.css"
import {useNavigate} from "react-router-dom";
import {Products_base} from "../../Products_base";
import Bin from './img/trash_bin.svg';

export function Cart() {

    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBackToShopping = () => {
        dispatch(closeCart()); // Закрываем корзину
    }

    const handleViewCart = () => {
        dispatch(closeCart()); // Закрываем корзину
        const lastProductId = localStorage.getItem('lastViewedProduct');
        if (lastProductId) {
            navigate(`/product/${lastProductId}`); // Возврат на страницу товара
        }else {
         alert('Нет последнего добавленного товара!');
        }
    }

    // Функция для расчета цены за еденицу товара с учетом скидки
    const calculatePriceDiscount = (item) => {

        // Находим товары в Product_base
        const product = Products_base.men.find((p) => p.id === item.id) || {};
        const discount = product.discount ? parseFloat(product.discount.toString().replace('%', '').replace('-', '')) : 0;

        // Вычисляем цену за еденицу с учетом скидки
        const discountAmount = (item.price * discount) / 100;  //Считаем скидку
        return item.price - discountAmount;
    }
    // Итоговая стоимость корзины
    const totalCartPrice = cartItems.reduce((total, item) => {
        const discountedPrice = calculatePriceDiscount(item) * item.quantity;
        return total + discountedPrice;
    }, 0);

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
                        <span>Delivery info</span>
                        <span>Payment</span>
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
                                            <p>{(item.size).slice(0, -3)}</p>
                                        </div>
                                        <div className={styles.cart_item_price}>
                                            <div className={styles.cart_item_price_block}>
                                                <button onClick={() => dispatch(decreaseQuantity({
                                                    id:item.id,
                                                    color:item.color,
                                                    size:item.size
                                                    }))}>-</button>
                                                <p>{item.quantity}</p>
                                                <button onClick={() => dispatch(increaseQuantity({
                                                    id:item.id,
                                                    color:item.color,
                                                    size:item.size}))}>+</button>
                                            </div>
                                            <h3>$ {(calculatePriceDiscount(item) * item.quantity).toFixed(2)}</h3>
                                            <img src={Bin} alt='trash_bin' width='25'
                                                 onClick={() => dispatch(removeFromCart({
                                                     id: item.id,
                                                     color: item.color,
                                                     size: item.size
                                                 }))}/>
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