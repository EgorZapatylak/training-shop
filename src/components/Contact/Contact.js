import React from 'react';
import {MapComponent} from "../MapComponent/MapComponent";
import style from './Contact.module.css'

export const Contact = () => {
    return (
        <div className={style.container}>
            <h1>Карта с маркером</h1>
            <MapComponent />
        </div>
    );
};