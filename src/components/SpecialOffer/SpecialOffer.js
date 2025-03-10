import React, {useState} from 'react';
import './SpecialOffer.css'

export function SpecialOffer () {

    const [email, setEmail] = useState('') // Состояние для email
    const [error, setError] = useState('') // Состояние для ошибок
    const [isLoading, setIsLoading] = useState(false) // Состояние загрузки
    const [message, setMessage] = useState('') // Сообщение пользователю

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
        setError(validateEmail(value));
    };

    // Обрвботчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (error || !email.trim()) return;

        setIsLoading(true)
        setMessage(''); // Сбрасываем сообщение

        try{
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setMessage('Письмо успешно отправлено!');
        } catch (err) {
            setMessage('Ошибка при отправке письма. Попробуйте сноваю');
        } finally {
            setIsLoading(false);
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
                <form onSubmit={handleSubmit}>
                    <input
                        type='email'
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        disabled={isLoading} // Блокируем поле при отправке
                    />
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    {message && <p style={{color: message.includes('Ошибка') ? 'red' : 'green'}}>{message}</p>}
                    <button
                        type='submit'
                        disabled={!isEmailValid || isLoading}>
                        {isLoading ? 'Sending...' : 'Subscribe'}
                    </button>
                </form>
            </div>
        </div>
    );
}