import React, {useEffect, useState} from 'react';
import styles from './Payment.module.css'

export const Payment = ({setIsPaymentValid}) => {

    const [selectedMethod, setSelectedMethod] = useState('visa');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [email, setEmail] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, '').slice(0, 16); // Оставляем только цифры, максимум 16 символов

        // Форматируем в виде "#### #### #### ####"
        value = value.replace(/(\d{4})/g, '$1 ').trim();

        setCardNumber(value);
    }

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 4) value = value.slice(0, 4)
        if (value.length >= 2) {
            value = `${value.slice(0, 2)}/${value.slice(2)}`;
        }

        setExpiryDate(value);
    }

    const handleCvvChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 3) value = value.slice(0, 3);
        setCvv(value);
    }

    const validateForm = () => {
        let newErrors = {};

        if (selectedMethod === 'visa' || selectedMethod === 'mastercard') {

            if (isSubmitted && !cardNumber.trim()) newErrors.cardNumber = 'Введите номер карты';
            if (isSubmitted && !expiryDate.trim()) newErrors.expiryDate = 'Введите срок действия';
            if (isSubmitted && !cvv.trim()) newErrors.cvv = 'Введите cvv';
        }
        if (selectedMethod === 'paypal') {
            if (!email.trim() || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                newErrors.email = 'Введите корректный email';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        setTimeout(() => {
            const isValid = validateForm();
            setIsPaymentValid(isValid);
        }, 0);
    };

    useEffect(() => {
        setIsSubmitted(false);
        setErrors({});
        setIsPaymentValid(selectedMethod === 'cash');
    }, [selectedMethod]);


    return (
        <>
            <h3>Method of payments</h3>

            <div className={styles.paymentMethod}>
                {['paypal', 'visa', 'mastercard', 'cash'].map((method) => (
                    <label key={method} className={styles.paymentOption}>
                        <input
                            type="radio"
                            name='payment'
                            value={method}
                            checked={selectedMethod === method}
                            onChange={() => setSelectedMethod(method)}
                        />
                        <img src={`./src/components/${method}.svg`} alt={method}/>
                    </label>
                ))}
            </div>

            {selectedMethod !== 'cash' && selectedMethod !== 'paypal' && (
                <form id='payment-form' onSubmit={handleSubmit}>
                    <div className={styles.cardDetails}>
                        <h3>CARD</h3>
                        <input
                            type="text"
                            placeholder='____ ____ ____ ____'
                            className={styles.cardInput}
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                        />
                        {isSubmitted && errors.cardNumber && <p className={styles.error}>{errors.cardNumber}</p>}

                        <div className={styles.cardInfo}>
                            <input
                                type="text"
                                placeholder='MM/YY'
                                className={styles.smallInput}
                                value={expiryDate}
                                onChange={handleExpiryChange}
                                maxLength='5'
                            />
                            {isSubmitted && errors.expiryDate && <p className={styles.error}>{errors.expiryDate}</p>}
                            <input
                                type="text"
                                placeholder='CVV'
                                className={styles.smallInput}
                                value={cvv}
                                onChange={handleCvvChange}
                                maxLength='3'
                            />
                            {isSubmitted && errors.cvv && <p className={styles.error}>{errors.cvv}</p>}
                        </div>
                    </div>
                </form>
            )}
            {selectedMethod === 'paypal' && (
                <div className={styles.cardDetails}>
                    <h3>E-MAIL</h3>
                    <input
                        type="text"
                        placeholder='e-mail'
                        className={styles.emailInput}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {isSubmitted && errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
            )}
        </>
    );
};