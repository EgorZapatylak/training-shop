import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import styles from './Payment.module.css';

export const Payment = forwardRef(({setIsPaymentValid}, ref) => {
    const [selectedMethod, setSelectedMethod] = useState('visa');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [email, setEmail] = useState('');
    const [cvv, setCvv] = useState('');
    const [showCvv, setShowCvv] = useState(false);  // Состояние для управления видимостью CVV
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    useImperativeHandle(ref, () => ({
        submitPayment: () => {
            handleSubmit({
                preventDefault: () => {
                }
            })
        }
    }))

    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, '').slice(0, 16); // Оставляем только цифры, максимум 16 символов
        value = value.replace(/(\d{4})/g, '$1 ').trim(); // Форматируем в виде "#### #### #### ####"
        setCardNumber(value);
    };

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 4) value = value.slice(0, 4);
        if (value.length >= 2) {
            value = `${value.slice(0, 2)}/${value.slice(2)}`;
        }
        setExpiryDate(value);
    };

    const handleCvvChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 3) value = value.slice(0, 3);
        setCvv(value);
    };

    const toggleCvvChange = () => {
        setShowCvv(!showCvv); // Переключаем видимость CVV
    }

    const validateForm = () => {
        let newErrors = {};

        if (selectedMethod === 'visa' || selectedMethod === 'mastercard') {
            if (!cardNumber.trim() || cardNumber.replace(/\s/g, '').length !== 16) {
                newErrors.cardNumber = 'Введите номер карты';
            }
            if (!expiryDate.trim() || expiryDate.replace(/\D/g, '').length !== 4) {
                newErrors.expiryDate = 'Введите срок действия';
            }
            if (!cvv.trim() || cvv.length !== 3) {
                newErrors.cvv = 'Введите CVV';
            }
        }

        if (selectedMethod === 'paypal') {
            if (!email.trim()) {
                newErrors.email = 'Введите email';
            } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                newErrors.email = 'Введите корректный email';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        const isValid = validateForm();
        setIsPaymentValid(isValid);

        if (isValid) {
            // Действия при успешной валидации
            console.log('Форма успешно отправлена');

            //Получаем данные корзины и доставки из localStorage
            console.log('cart before parse:', localStorage.getItem('cart'));
            console.log('deliveryInfo before parse:', localStorage.getItem('deliveryInfo'));
            const cartItems = JSON.parse(localStorage.getItem('cartItems'))||[];
            const deliveryInfo = JSON.parse(localStorage.getItem('deliveryInfo'))||[];

            //Формируем заказ
            const newOrder = {
                id: Date.now(),
                items: cartItems,
                deliveryInfo,
                paymentDetails: {
                    method: selectedMethod,
                    cardNumber: selectedMethod !=='cash' ? cardNumber: 'Наличные',
                    expiryDate: selectedMethod === 'visa' || selectedMethod === 'mastercard' ? expiryDate : null,
                    email: selectedMethod === 'paypal' ? email: null,
                },
                date: new Date().toLocaleString(),
                status: 'Ожидает подтверждения',
            };

            // Сохраняем заказ в localStorage
            const savedOrder = JSON.parse(localStorage.getItem('orders')) || [];
            savedOrder.push(newOrder);
            localStorage.setItem('orders', JSON.stringify(savedOrder));

            //Очищаем корзину
            localStorage.removeItem('cart');

            //Выводим сообщение
            alert('Заказ успешно оформлен!');
        }
    };

    useEffect(() => {
        setIsSubmitted(false);
        setErrors({});
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        setEmail('');
        setIsPaymentValid(selectedMethod === 'cash');
    }, [selectedMethod, setIsPaymentValid]);

    return (
        <>
            <h3>Method of payments</h3>

            <div className={styles.paymentMethod}>
                {['paypal', 'visa', 'mastercard', 'cash'].map((method) => (
                    <label key={method} className={styles.paymentOption}>
                        <input
                            type="radio"
                            name="payment"
                            value={method}
                            checked={selectedMethod === method}
                            onChange={() => setSelectedMethod(method)}
                        />
                        <img src={require(`./images/${method}.svg`)} alt={method}/>
                    </label>
                ))}
            </div>

            {selectedMethod !== 'cash' && selectedMethod !== 'paypal' && (
                <form id="payment-form" onSubmit={handleSubmit}>
                    <div className={styles.cardDetails}>
                        <h3>CARD</h3>
                        <input
                            type="text"
                            inputMode='numeric'
                            placeholder="**** **** **** ****"
                            className={styles.cardInput}
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                        />
                        {isSubmitted && errors.cardNumber && <p className={styles.error}>{errors.cardNumber}</p>}

                        <div className={styles.cardInfo}>
                            <div className={styles.cardInfo_style}>
                                <input
                                    type="text"
                                    inputMode='numeric'
                                    placeholder="MM/YY"
                                    className={styles.smallInput}
                                    value={expiryDate}
                                    onChange={handleExpiryChange}
                                    maxLength="5"
                                />
                                {isSubmitted && errors.expiryDate &&
                                    <p className={styles.error}>{errors.expiryDate}</p>}
                            </div>
                            <div className={styles.cardInfo_style}>
                                <input
                                    type={showCvv ? 'text' : 'password'}  // Переключаем тип ввода
                                    inputMode='numeric'
                                    placeholder="CVV"
                                    className={styles.smallInput}
                                    value={cvv}
                                    onChange={handleCvvChange}
                                    maxLength="3"
                                />
                                <span
                                    onClick={toggleCvvChange}
                                    style={{
                                        cursor: 'pointer',
                                        userSelect: 'none', // Чтобы текст иконки нельзя было выделить
                                    }}
                                >
                                 {showCvv ? '👁️' : '👁️‍🗨️'} {/* Иконка глаза */}
                                </span>
                                {isSubmitted && errors.cvv && <p className={styles.error}>{errors.cvv}</p>}
                            </div>
                        </div>
                    </div>
                </form>
            )}

            {selectedMethod === 'paypal' && (
                <form id="payment-form" onSubmit={handleSubmit}>
                    <div className={styles.cardDetails}>
                        <h3>E-MAIL</h3>
                        <input
                            type="text"
                            placeholder="e-mail"
                            className={styles.emailInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {isSubmitted && errors.email && <p className={styles.error}>{errors.email}</p>}
                    </div>
                </form>
            )}
        </>
    );
});