import React from 'react';
import Banner from "./img/banner.jpg";
import Women from "./img/women.jpg";
import Men from "./img/men.jpg";
import Accessories from "./img/accessories.jpg";
import './Hero.css'

export function Hero ()  {
    return (
        <div className='hero'>
            <div className='banner'>
                <img src={Banner} alt=''/>
                <div className='banner_content'>
                    <p>Banner</p>
                    <span>Your Title Text</span>
                </div>
                <div className='chevron-right'></div>
                <div className='chevron-left'></div>
            </div>
            <div className='red'>
                <div className='green'>
                    <div className='women'>
                        <img src={Women} alt=''/>
                        <button className='green_button'>Women</button>
                    </div>
                    <div className='men'>
                        <img src={Men} alt=''/>
                        <button className='green_button'>Men</button>
                    </div>
                </div>
                <div className='accessories'>
                    <img src={Accessories} alt=''/>
                    <button className='accessories_button'>Accessories</button>
                </div>
            </div>
        </div>
    );
}
