import style from './OrderTab.mdule.css'

import React, {useEffect, useState} from 'react';

export const OrderTab = () => {

    const [orders,setOrders] = useState([])


    //Загружаем заказы (после можно заменить на API)
    useEffect(()=> {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(savedOrders);
    },[])

    return (
        <div className={style.orders}>
            <h2>Мои заказы</h2>
            {orders.length === 0 ? (
                <p>Вы ёще ничего не заказывали.</p>
            ):(
                <div className={style.ordersList}>
                    {orders.map((order) => (
                        <div key = {order.id} className={style.orderCard}>
                            <h3>Заказ #{order.id}</h3>
                            <p>Дата: {order.data}</p>
                            <p>Сумма: {order.total}</p>
                            <button>Подробнее</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
