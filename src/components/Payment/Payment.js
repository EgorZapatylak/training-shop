import React, {useState} from 'react';
import styles from './Payment.module.css'

export const Payment = () => {

    const [selectedMethod, setSelectedMethod] = useState('visa');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 4) value = value.slice(0,4)
        if (value.length >= 2) {
            value = `${value.slice(0,2)}/${value.slice(2)}`;
        }

        setExpiryDate(value);
    }

    const handleCvvChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 3) value = value.slice(0, 3);
        setCvv(value);
    }

    const validateForm = () => {
        let newErrors={};
        if (!cardNumber.trim()) newErrors.cardNumber = 'Введите номер карты';
        if (!expiryDate.trim()) newErrors.expiryDate = 'Введите срок действия';
        if (!cvv.trim()) newErrors.cvv = 'Введите cvv';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        if (! validateForm()) return;
        console.log('Оплата отправлена', {cardNumber, expiryDate, cvv});
    };

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
                            onChange={()=>setSelectedMethod(method)}
                        />
                        <img src={`./src/components/${method}.svg`} alt={method}/>
                    </label>
                ))}
            </div>

            {selectedMethod !== 'cash' && selectedMethod !== 'paypal' && (
                <div className={styles.cardDetails}>
                    <h3>CARD</h3>
                    <input
                        type="text"
                        placeholder='____ ____ ____ ____'
                        className={styles.cardInput}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    {errors.cardNumber && <p className={styles.error}>{errors.cardNumber}</p>}

                    <div className={styles.cardInfo}>
                        <input
                            type="text"
                            placeholder='MM/YY'
                            className={styles.smallInput}
                            value={expiryDate}
                            onChange={handleExpiryChange}
                            maxLength='5'
                        />
                        {errors.expiryDate && <p className={styles.error}>{errors.expiryDate}</p>}
                        <input
                            type="text"
                            placeholder='CVV'
                            className={styles.smallInput}
                            value={cvv}
                            onChange={handleCvvChange}
                            maxLength='3'
                        />
                        {errors.cvv && <p className={styles.error}>{errors.cvv}</p>}
                    </div>
                </div>
            )}
            {selectedMethod === 'paypal' && (
                <div className={styles.cardDetails}>
                    <h3>E-MAIL</h3>
                    <input type="text" placeholder='e-mail' className={styles.emailInput}/>
                </div>
            )}
        </>
    );
};