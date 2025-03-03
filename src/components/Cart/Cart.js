import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {clearCart, closeCart, decreaseQuantity, increaseQuantity, removeFromCart} from "../../cartSlice";
import styles from "./Cart.module.css"
import {useNavigate} from "react-router-dom";
import {Products_base} from "../../Products_base";
import Bin from './img/trash_bin.svg';
import {Payment} from "../Payment/Payment";

export function Cart() {

    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // Шаги в корзине -> 1- товары, 2 - доставка, 3 - оплата

    const [deliveryMethod, setDeliveryMethod] = useState('pickup');

    const handleBackToShopping = () => {
        dispatch(closeCart()); // Закрываем корзину
    }

    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

    const handleOrder = () => {
        setIsOrderConfirmed(true);
        dispatch(clearCart()); // Очищаем корзину
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

    const handleNextStep = () => {
        if (step === 2) {
            // Получаем все input из форм
            const formInputs = document.querySelectorAll(`.${styles.form} input:not([type = 'checkbox'])`);
            const isFormValid = Array.from(formInputs).every(input => input.value.trim() !== '');

            if (!isFormValid) {
                alert('Please fill all fields before proceeding.');
                return;
            }
        }

        if (step < 3) setStep(step + 1);
    };

    //* Форма для самовывоза с почты *//

    const PickupForm = () => (
        // Форма для ввода данных
        <>
            <form className={styles.form}>
                <label>PHONE</label>
                <input type="text" placeholder='+375 (__) _______ '/>

                <label>E-MAIL</label>
                <input type="text" placeholder='e-mail'/>

                <label>ADDRESS</label>
                <input type="text" placeholder='Country'/>
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='Street'/>

                <div className={styles.addressRow}>
                    <input type="text" placeholder='House'/>
                    <input type="text" placeholder='Apartment'/>
                </div>

                <label>POSTCODE</label>
                <input type="text" placeholder='BY ______'/>

                {/* Согласие на обработку данных */}
                <label className={styles.checkbox}>
                    <input type="checkbox"/>
                    I agree to the processing of me personal information
                </label>
            </form>
            <div className={styles.cart_total_price}>
                <h2>Total: ${totalCartPrice.toFixed(2)}</h2>
            </div>
            <div className={styles.cart_button}>
                <button className={styles.cart_button_black} onClick={handleNextStep}>FURTHER</button>
                <button onClick={handleViewCart}>VIEW CART</button>
            </div>
        </>
    )

    //* Форма для экспресс-доставки *//

    const ExpressForm = () => (
        // Форма для ввода данных
        <>
            <form className={styles.form}>
                <label>PHONE</label>
                <input type="text" placeholder='+375 (__) _______ '/>

                <label>E-MAIL</label>
                <input type="text" placeholder='e-mail'/>

                <label>ADDRESS</label>
                <input type="text" placeholder='Country'/>
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='Street'/>

                <div className={styles.addressRow}>
                    <input type="text" placeholder='House'/>
                    <input type="text" placeholder='Apartment'/>
                </div>

                {/* Согласие на обработку данных */}
                <label className={styles.checkbox}>
                    <input type="checkbox"/>
                    I agree to the processing of me personal information
                </label>
            </form>
            <div className={styles.cart_total_price}>
                <h2>Total: ${totalCartPrice.toFixed(2)}</h2>
            </div>
            <div className={styles.cart_button}>
                <button className={styles.cart_button_black} onClick={handleNextStep}>FURTHER</button>
                <button onClick={handleViewCart}>VIEW CART</button>
            </div>
        </>
    )

    //* Форма для самовывоза из магазина *//

    const StoreForm = () => (
        // Форма для ввода данных
        <>
            <form className={styles.form}>
                <label>PHONE</label>
                <input type="text" placeholder='+375 (__) _______ '/>

                <label>E-MAIL</label>
                <input type="text" placeholder='e-mail'/>

                <label>ADDRESS OF STORE</label>
                <input type="text" placeholder='Country'/>
                <input type="text" placeholder='Store adress'/>

                {/* Согласие на обработку данных */}
                <label className={styles.checkbox}>
                    <input type="checkbox"/>
                    I agree to the processing of me personal information
                </label>
            </form>
            <div className={styles.cart_total_price}>
                <h2>Total: ${totalCartPrice.toFixed(2)}</h2>
            </div>
            <div className={styles.cart_button}>
                <button className={styles.cart_button_black} onClick={handleNextStep}>FURTHER</button>
                <button onClick={handleViewCart}>VIEW CART</button>
            </div>
        </>
    )

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
                !isOrderConfirmed ? (
                    <>
                        <div className={styles.cart_road}>
                        <span className={step === 1 ? styles.active : ''}
                              onClick={() => setStep(1)}>Item in Cart </span>
                            <span className={step === 2 ? styles.active : ''}
                                  onClick={() => setStep(2)}>Delivery info</span>
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
                                    <button className={styles.cart_button_black} onClick={handleNextStep}>CHECK OUT
                                    </button>
                                    <button onClick={handleViewCart}>VIEW CART</button>
                                </div>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <h4>Choose the method of delivery of the items</h4>
                                <div className={styles.deliveryOptions}>
                                    {/* Выбор метода доставки */}
                                    <label>
                                        <input
                                            type="radio"
                                            name='delivery'
                                            value='pickup'
                                            checked={deliveryMethod === 'pickup'}
                                            onChange={() => setDeliveryMethod('pickup')}
                                        />
                                        Pickup from post offices
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name='delivery'
                                            value='express'
                                            checked={deliveryMethod === 'express'}
                                            onChange={() => setDeliveryMethod('express')}
                                        />
                                        Express delivery
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name='delivery'
                                            value='store'
                                            checked={deliveryMethod === 'store'}
                                            onChange={() => setDeliveryMethod('store')}
                                        />
                                        Store pickup
                                    </label>
                                </div>

                                {/* Отображение формы в зависимости от выборанного метода*/}

                                {deliveryMethod === 'pickup' && <PickupForm/>}
                                {deliveryMethod === 'express' && <ExpressForm/>}
                                {deliveryMethod === 'store' && <StoreForm/>}
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <Payment/>
                                <div className={styles.cart_total_price}>
                                    <h2>Total: ${totalCartPrice.toFixed(2)}</h2>
                                </div>
                                <div className={styles.cart_button}>
                                    <button className={styles.cart_button_black} onClick={handleOrder}>READY</button>
                                    <button onClick={handleViewCart}>VIEW CART</button>
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <h2>Thank you for your order</h2>
                            <p>Information about your order will appear in your e-mail.</p>
                            <p>Our manager will call you back.</p>
                            <button className={styles.back_to_shopping} onClick={handleBackToShopping}>BACK TO
                                SHOPPING
                            </button>
                        </div>
                    </div>)
            )}
        </div>
    );
}