import React from 'react';
import Truck from "./img/truck.svg";
import Refresh from "./img/refresh.svg";
import Support from "./img/support.svg";
import './Advantage.css'

export function Advantage ()  {
    return (
        <div className='advantage'>
            <div className='truck'>
                <img src={Truck} alt=''/>
                <div className='inform'>
                    <p>FREE SHIPPING</p>
                    <span>On all UA order or order above $100</span>
                </div>
            </div>
            <div className='truck'>
                <img src={Refresh} alt=''/>
                <div className='inform'>
                    <p>30 DAYS RETURN</p>
                    <span>Simply return it within 30 days for an exchange</span>
                </div>
            </div>
            <div className='truck'>
                <img src={Support} alt=''/>
                <div className='inform'>
                    <p>SUPPORT 24/7</p>
                    <span>Contact us 24 hours a day, 7 days a week</span>
                </div>
            </div>
        </div>
    );
}