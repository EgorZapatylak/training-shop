import React, {useEffect, useRef, useState} from 'react';
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

    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        postcode: '',
        country: '',
        city: '',
        street: '',
        house: '',
        apartment: '',
    })

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((prevState) => ({
            ...prevState, // Сохраняем все предыдущие значения
            [name]: type === 'checkbox' ? checked : value, // Оновляем толко одно поле
        }))
    }

    const [deliveryMethod, setDeliveryMethod] = useState('pickup');

    const [activeField, setActiveField] = useState('')
    const [errors, setErrors] = useState({});
    const [isAgreed, setIsAgreed] = useState(false);

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
        console.log('HandleNextStep called')
        if (step === 2) {
            const isValid = validateForm();
            console.log('validation result:', isValid);

            if (!isValid) {
                console.log('Validation failed', errors);
                return;
            }
        }
        // // Получаем все input из форм
        // const formInputs = document.querySelectorAll(`.${styles.form} input:not([type = 'checkbox'])`);
        // const isFormValid = Array.from(formInputs).every(input => input.value.trim() !== '');
        //
        // if (!isFormValid) {
        //     alert('Please fill all fields before proceeding.');
        //     return;
        // }
        console.log('Procceding to next step')
        setStep(prevStep => prevStep + 1);
    };
    console.log('Current step', step);

    const phoneInputRef = useRef(null);
    const postcodeInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const countryInputRef = useRef(null);
    const cityInputRef = useRef(null);
    const streetInputRef = useRef(null);
    const houseInputRef = useRef(null);
    const apartmentInputRef = useRef(null);


    const handlePhoneChange = (e) => {
        let input = e.target.value.replace(/\D/g, ''); // Оставляем только цифры

        if (input.startsWith('375')) {
            input = input.slice(3);
        } else if (input.startsWith('7')) {
            input = input.slice(1);
        }

        if (input.length > 9) {
            input = input.slice(0, 9); // Ограничиваем до 9 цифр
        }

        // Формируем номер телефона
        let formattedPhone = '+375 ';
        if (input.length > 0) {
            formattedPhone += `(${input.slice(0, 2)}`
        }
        if (input.length >= 2) {
            formattedPhone += `) ${input.slice(2, 5)}`;
        }
        if (input.length >= 5) {
            formattedPhone += `-${input.slice(5, 7)}`;
        }
        if (input.length >= 7) {
            formattedPhone += `-${input.slice(7, 9)}`;
        }

        setFormData((prevState) => ({
            ...prevState,
            phone: formattedPhone,
        }))

        setTimeout(() => phoneInputRef.current?.focus(), 0)
    };

    const handleEmailChange = (e) => {
        let input = e.target.value.replace(/\s/g, ''); // Убираем пробелы

        // Разрешаем только буквы, цифры и специальные символы для email
        if (!/^[a-zA-Z0-9@._-]*$/.test(input)) {
            return;
        }
        setFormData((prevState) => ({
            ...prevState,
            email: input,
        }));

        setTimeout(() => emailInputRef.current?.focus(), 0)
    };

    const handleAddressChange = (e) => {
        const {name, value} = e.target;

        setActiveField(name);

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (activeField === 'country') countryInputRef.current?.focus();
        if (activeField === 'city') cityInputRef.current?.focus();
        if (activeField === 'street') streetInputRef.current?.focus();
        if (activeField === 'house') houseInputRef.current?.focus();
        if (activeField === 'apartment') apartmentInputRef.current?.focus();
    }, [activeField, formData]);

    const handlePostcodeChange = (e) => {
        let input = e.target.value.replace(/\D/g, '');

        if (input.length > 6) {
            input = `${input.slice(0, 6)}`;
        }

        setFormData((prevState) => ({
            ...prevState,
            postcode: input,
        }));

        setTimeout(() => postcodeInputRef.current?.focus(), 0)
    };

    //* Форма для самовывоза с почты *//

    const PickupForm = () => (
        // Форма для ввода данных
        <>
            <form className={styles.form}>
                <label>PHONE</label>
                <input
                    type="text"
                    name='phone'
                    placeholder='+375 (__) _______ '
                    ref={phoneInputRef}
                    maxLength='19'
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={errors.phone ? styles.inputError : ''}
                />
                {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}

                <label>E-MAIL</label>
                <input
                    type="email"
                    name='email'
                    placeholder='example@mail.com'
                    ref={emailInputRef}
                    value={formData.email}
                    onChange={handleEmailChange}
                    className={errors.email ? styles.inputError : ''}
                />
                {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}

                <label>ADDRESS</label>
                <input
                    type="text"
                    name='country'
                    placeholder='Country'
                    ref={countryInputRef}
                    value={formData.country}
                    onChange={handleAddressChange}
                    className={errors.country ? styles.inputError : ''}
                />
                {errors.country && <p className={styles.errorMessage}>{errors.country}</p>}
                <input
                    type="text"
                    name='city'
                    placeholder='City'
                    ref={cityInputRef}
                    value={formData.city}
                    onChange={handleAddressChange}
                    className={errors.city ? styles.inputError : ''}
                />
                {errors.city && <p className={styles.errorMessage}>{errors.city}</p>}
                <input
                    type="text"
                    name='street'
                    placeholder='Street'
                    ref={streetInputRef}
                    value={formData.street}
                    onChange={handleAddressChange}
                    className={errors.street ? styles.inputError : ''}
                />
                {errors.street && <p className={styles.errorMessage}>{errors.street}</p>}

                <div className={styles.addressRow}>
                    <input
                        type="text"
                        name='house'
                        placeholder='House number'
                        ref={houseInputRef}
                        value={formData.house}
                        onChange={handleAddressChange}
                        className={errors.house ? styles.inputError : ''}
                    />
                    {errors.house && <p className={styles.errorMessage}>{errors.house}</p>}
                    <input
                        type="text"
                        name='apartment'
                        placeholder='Apartment number'
                        value={formData.apartment}
                        ref={apartmentInputRef}
                        onChange={handleAddressChange}
                        className={errors.apartment ? styles.inputError : ''}
                    />
                    {errors.apartment && <p className={styles.errorMessage}>{errors.apartment}</p>}
                </div>

                <label>POSTCODE</label>
                <input
                    type="text"
                    name='postcode'
                    placeholder='BY 123456'
                    maxLength='6'
                    ref={postcodeInputRef}
                    value={formData.postcode}
                    onChange={handlePostcodeChange}
                    className={errors.postcode ? styles.inputError : ''}
                />

                {errors.postcode && <p className={styles.errorMessage}>{errors.postcode}</p>}

                {/* Согласие на обработку данных */}
                <label className={styles.checkbox}>
                    <input
                        type="checkbox"
                        checked={isAgreed}
                        onChange={() => setIsAgreed(!isAgreed)}
                    />
                    I agree to the processing of me personal information
                </label>
                {errors.agreement && <p className={styles.errorMessage}>{errors.agreement}</p>}
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
                <input
                    type="text"
                    placeholder='+375 (__) _______ '
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={errors.phone ? styles.inputError : ''}
                />
                {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}

                <label>E-MAIL</label>
                <input
                    type="text"
                    placeholder='e-mail'
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? styles.errorMessage : ''}
                />
                {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}

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
                    <input
                        type="checkbox"
                        checked={isAgreed}
                        onChange={() => setIsAgreed(!isAgreed)}
                    />
                    I agree to the processing of me personal information
                    {errors.agreement && <p className={styles.errorMessage}>{errors.agreement}</p>}
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
                <input
                    type="text"
                    placeholder='+375 (__) _______ '
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={errors.phone ? styles.inputError : ''}
                />
                {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}


                <label>E-MAIL</label>
                <input
                    type="text"
                    placeholder='e-mail'
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? styles.errorMessage : ''}
                />
                {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}

                <label>ADDRESS OF STORE</label>
                <input type="text" placeholder='Country'/>
                <input type="text" placeholder='Store adress'/>

                {/* Согласие на обработку данных */}
                <label className={styles.checkbox}>
                    <input
                        type="checkbox"
                        checked={isAgreed}
                        onChange={() => setIsAgreed(!isAgreed)}
                    />
                    I agree to the processing of me personal information
                    {errors.agreement && <p className={styles.errorMessage}>{errors.agreement}</p>}
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

    // Функция валидации полей

    const validateForm = () => {
        console.log('Current formData:', formData);
        let newErrors = {};
        if (!formData.phone.match(/^\+375\s?\(\d{2}\)\s?\d{3}-\d{2}-\d{2}$/)) {
            newErrors.phone = 'Invalid phone format. Use +375 (XX) XXX-XX-XX';
        }
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.postcode.match(/^\d{6}$/)) {
            newErrors.postcode = 'Postcode must be 6 digits';
        }

        if (!formData.country.trim()) {
            newErrors.country = 'Country cannot be empty';
        }

        if (!formData.city.trim()) {
            newErrors.city = 'City cannot be empty';
        }

        if (!formData.street.trim()) {
            newErrors.street = 'Street cannot be empty';
        }

        if (!formData.house.trim()) {
            newErrors.house = 'House number cannot be empty';
        }

        if (!formData.apartment.trim()) {
            newErrors.apartment = 'Apartment number cannot be empty';
        }

        // if (paymentMethod === 'card') {
        //     if (!cardNummber.match(/^\d{16}$/)) {
        //         newErrors.cardNumber = 'Card number must be 16 digits.';
        //     }
        //     if (!expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
        //         newErrors.expiry = 'Expiry must be in MM/YY format.';
        //     }
        //     if (!cvv.match(/^\d{3}/)) {
        //         newErrors.cvv = 'Cvv must be 3 digits.';
        //     }
        // }

        if (!isAgreed) {
            newErrors.agreement = 'You must agree to the processing of personal data.';
        }

        setErrors(newErrors);
        console.log('Validation errors:', newErrors)
        return Object.keys(newErrors).length === 0;
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