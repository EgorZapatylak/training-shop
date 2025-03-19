import React, {useEffect} from 'react';
import style from './ErrorPage.module.css'

const ErrorPage = ({ errorCode, errorMessage }) => {

    useEffect(() => {
        // Прокрутка страницы к началу
        window.scrollTo(0, 0);
    }, []); // Пустой массив зависимостей, чтобы эффект срабатывал только при монтировани компонента

    return (
        <div className={style.container}>
            <h1 className={style.header}>{errorCode}</h1>
            <p className={style.message}>{errorMessage}</p>
            <a href="#/" className={style.link}>Вернуться на главную</a>
        </div>
    );
};

export default ErrorPage;