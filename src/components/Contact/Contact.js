import React from 'react';
import MapComponent from "../MapComponent/MapComponent";
import style from './Contact.module.css'

export const Contact = () => {
    return (
        <div className={style.container}>
            <div className={style.container_map}>
                <h1>Карта с маркером</h1>
                <MapComponent/>
            </div>
            <div className={style.contacts}>
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
    );
};