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
                    <input type="text" placeholder='____ ____ ____ ____' className={styles.cardInput}/>
                    <div className={styles.cardInfo}>
                        <input type="text" placeholder='MM/YY' className={styles.smallInput}/>
                        <input type="text" placeholder='CVV' className={styles.smallInput}/>
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