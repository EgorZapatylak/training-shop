import React from 'react';
// import {MapComponent} from "../MapComponent/MapComponent";
import style from './Contact.module.css'
import Map from './img/map.png'

export const Contact = () => {
    return (
        <div className={style.container}>
            <dvi>
                <h1>Карта с маркером</h1>
                {/*<MapComponent/>*/}
                <img src={Map} alt="map"/>
            </dvi>
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