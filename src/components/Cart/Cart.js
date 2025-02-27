import React, {useState} from 'react';
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
    const [step, setStep] = useState(1); // Шаги в корзине -> 1- товары, 2 - доставка, 3 - оплата

    const handleBackToShopping = () => {
        dispatch(closeCart()); // Закрываем корзину
    }

    const handleViewCart = () => {
        dispatch(closeCart()); // Закрываем корзину
        const lastProductId = localStorage.getItem('lastViewedProduct');
        if (lastProductId) {
            const product = [...Products_base.men, ...Products_base.women].find(p => String(p.id) === lastProductId);

            if (product) {
                navigate(`/${product.category}/${lastProductId}`); // Возврат на страницу товара
            } else {
                alert('Товар не найден!')
            }
        } else {
            alert('Нет последнего добавленного товара!');
        }
    }

    // Функция для расчета цены за еденицу товара с учетом скидки
    const calculatePriceDiscount = (item) => {

        // Находим товары в Product_base
        const product = [...Products_base.men, ...Products_base.women].find((p) => p.id === item.id) || {};

        if (!product) return item.price //
        const discount = product.discount ? parseFloat(product.discount.toString().replace('%', '').replace('-', '')) : 0;

        // Вычисляем цену за еденицу с учетом скидки
        return item.price * (1 - discount / 100)
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
                        <span className={step === 1 ? styles.active : ''} onClick={() => setStep(1)}>Item in Cart </span> //
                        <span className={step === 2 ? styles.active : ''} onClick={() => setStep(2)}>Delivery info</span> //
                        <span className={step === 3 ? styles.active : ''} onClick={() => setStep(3)}>Payment</span>
                    </div>
                    {step === 1 && (
                        <>
                            <div className={styles.cart_item}>
                                <ul>
                                    {cartItems.map(item => (
                                        <li key={`${item.id} - ${item.size} - ${item.color}`}>
                                            <div className={styles.cart_item_img}>
                                                <img src={item.image} alt={item.name} width='100' height='125'/>
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
                                                            id: item.id,
                                                            color: item.color,
                                                            size: item.size
                                                        }))}>-
                                                        </button>
                                                        <p>{item.quantity}</p>
                                                        <button onClick={() => dispatch(increaseQuantity({
                                                            id: item.id,
                                                            color: item.color,
                                                            size: item.size
                                                        }))}>+
                                                        </button>
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
                    {step === 2 && (
                        <div>
                            <h2>Delivery Information</h2>
                            <p>Enter your address and choose a delivery method</p>
                            <input type='text' placeholder='Enter address'/>
                        </div>
                    )}
                    {step === 3 && (
                        <div>
                            <h2>Payment</h2>
                            <p>Choose a payment method and confirm your order</p>
                            <button>Pay Now</button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}