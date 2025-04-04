// import style from './OrderTab.mdule.css'
// import React, {useEffect, useState} from 'react';
//
// export const OrderTab = () => {
//
//     const [orders,setOrders] = useState([])
//
//
//     //Загружаем заказы (после можно заменить на API)
//     useEffect(()=> {
//         const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
//         setOrders(savedOrders);
//     },[])
//
//     return (
//         <div className={style.orders}>
//             <h2>Мои заказы</h2>
//             {orders.length === 0 ? (
//                 <p>Вы ёще ничего не заказывали.</p>
//             ):(
//                 <div className={style.ordersList}>
//                     {orders.map((order) => (
//                         <div key = {order.id} className={style.orderCard}>
//                             <h3>Заказ #{order.id}</h3>
//                             <p>Дата: {order.data}</p>
//                             <p>Сумма: {order.total}</p>
//                             <button>Подробнее</button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

import React, { useEffect, useState } from "react";
import styles from "./OrderTab.mdule.css"
export const OrderTab = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
// Загружаем заказы из localStorage
        const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(savedOrders);
    }, []);

    return (
        <div className={styles.ordersContainer}>
            <h2>Мои заказы</h2>
            {orders.length === 0 ? (
                <p>У вас пока нет заказов.</p>
            ) : (
                <ul className={styles.orderList}>
                    {orders.map((order) => (
                        <li key={order.id} className={styles.orderItem}>
                            <h3>Заказ #{order.id}</h3>
                            <p><strong>Дата:</strong> {order.date}</p>
                            <p><strong>Статус:</strong> {order.status}</p>
                            <p><strong>Метод оплаты:</strong> {order.paymentDetails.method}</p>
                            <p><strong>Доставка:</strong> {order.deliveryInfo.address || "Не указано"}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
