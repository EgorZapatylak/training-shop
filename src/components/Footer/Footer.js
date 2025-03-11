import React, {useState} from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

export function Footer() {

    const [email, setEmail] = useState('') // Состояние для email
    const [error, setError] = useState('') // Состояние для ошибок
    const [isLoading, setIsLoading] = useState(false) // Состояние загрузки
    const [message, setMessage] = useState('') // Сообщение пользователю
    const [isTouched, setIsTouched] = useState(false); // Было ли поле в фокусе

    // Функция для валидации email
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Регулярное выражение для email
        if (!email.trim()) {
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

        if (isTouched) { // Проверяем только если поле уже трогали
            setError(validateEmail(value));
        }

        // Убираем сообщение при изменеии поля
        setMessage('');
    };

    const handleBlur = () => {
        setIsTouched(true);
        setError(validateEmail(email));
    }

    // Обрвботчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isTouched || error || !email.trim()) return;

        setIsLoading(true)
        setMessage(''); // Сбрасываем сообщение

        try{
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setMessage('Письмо успешно отправлено!');
            setEmail('');
            setIsTouched(false);
        } catch (err) {
            setMessage('Ошибка при отправке письма. Попробуйте сноваю');
        } finally {
            setIsLoading(false);
        }
    };

    // Проверка, валиден ли email
    const isEmailValid = !error && email.trim() !== '';

    return (
        <div className='footer'>
            <div className='footer_top'>
                <div>
                    <p>BE IN TOUCH WITH US:</p>
                </div>
                <div className='join'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={handleBlur} // Обрабатываем выход из поля
                            disabled={isLoading} // Блокируем поле при отправке
                        />
                        {isTouched && error && <p style={{color: 'red'}}>{error}</p>}
                        {message && <p style={{color: message.includes('Ошибка') ? 'red' : 'green'}}>{message}</p>}
                        <button
                            type='submit'
                            disabled={!isEmailValid || isLoading}>
                            {isLoading ? 'Sending...' : 'Join Us'}
                            </button>
                    </form>
                </div>
                <div className='social_bot'>
                    <a href='https://www.facebook.com/'>
                        <div className='f_1'/>
                    </a>
                    <a href='https://twitter.com/'>
                        <div className='f_2'/>
                    </a>
                    <a href='https://www.instagram.com'>
                        <div className='f_3'/>
                    </a>
                    <a href='https://www.pinterest.com/'>
                        <div className='f_4'/>
                    </a>
                </div>
            </div>
            <div className='footer_main'>
                <div className='categories'>
                    <h3>Categories</h3>
                    <Link to="/men">Men</Link>
                    <Link to="/women">Women</Link>
                    <a href="/accessories">Accessories</a>
                    <a href="/beauty">Beauty</a>
                </div>
                <div className='categories'>
                    <h3>Information</h3>
                    <a href="/aboutus">About Us</a>
                    <a href="/contactus">Contact Us</a>
                    <a href="/blog">Blog</a>
                    <a href="/fqs">FAQs</a>
                </div>
                <div className='categories'>
                    <h3>Useful Links</h3>
                    <a href="/terms">Terms & Conditions</a>
                    <a href="/returns">Returns & Exchanges</a>
                    <a href="/shipping">Shipping & Delivery</a>
                    <a href="/privacya">Privacy Policy</a>
                </div>
                <div className='categories'>
                    <h3>Contact Us</h3>
                    <div className='loc'>
                        <p>Belarus, Gomel, Lange 17</p>
                    </div>
                    <div className='num'>
                        <p>+375 29 100 20 30</p>
                    </div>
                    <div className='times'>
                        <p>All week 24/7</p>
                    </div>
                    <div className='mail'>
                        <p>info@clevertec.ru</p>
                    </div>
                </div>
            </div>
            <div className='footer_bot'>
                <div className='prava'>
                    <p>Copyright © 2032 all rights reserved</p>
                </div>
                <div className='spons'>
                    <div className='spons_1'/>
                    <div className='spons_2'/>
                    <div className='spons_3'/>
                    <div className='spons_4'/>
                    <div className='spons_5'/>
                    <div className='spons_6'/>
                    <div className='spons_7'/>
                </div>
                <div className='clever'>
                    <a href='https://clevertec.ru/study/frontend.html'>Clevertec.ru/training</a>
                </div>
            </div>
        </div>
    )
}