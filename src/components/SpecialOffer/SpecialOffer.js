import React, {useState} from 'react';
import './SpecialOffer.css'

export function SpecialOffer () {

    const [email, setEmail] = useState('') // Состояние для email
    const [error, setError] = useState('') // Состояние для ошибои

    // Функция для валидации email
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Регулярное выражение для email
        if (email) {
            return 'Поле не должно быть пустым';
        } else if (!regex.test(email)) {
            return 'Введите корректный email';
        }
        return '';
    }

    // Обработчик изменений email
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setError(validateEmail(value));
    };

    // Обрвботчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!error) {
            console.log('Email валиден:', email);
            // Действие при успешной отправке
        }
    };

    // Проверка, валиден ли email
    const isEmailValid = !error && email.trim() !== '';

    return (
        <div className='offer'>
            <div className='women_img'></div>
            <div className='men_img'></div>
            <div className='offer_container'>
                <p>Special Offer</p>
                <span>Subscribe <br/>And Get 10% Off</span>
                <input
                    onSubmit={handleSubmit}
                    type='email'
                    placeholder="Enter your email"
                    id='email'
                    value={email}
                    onChange={handleEmailChange}
                />
                {error && <p style={{color: 'red'}}>{error}</p>}
                <button
                    type='submit'
                    disabled={!isEmailValid}
                >Subscribe</button>
            </div>
        </div>
    );
}