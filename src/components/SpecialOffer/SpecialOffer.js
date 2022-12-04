import React from 'react';
import './SpecialOffer.css'

export function SpecialOffer () {
    return (
        <div className='offer'>
            <div className='women_img'></div>
            <div className='men_img'></div>
            <div className='offer_container'>
                <p>Special Offer</p>
                <span>Subscribe <br/> And Get 10% Off</span>
                <input type='email' placeholder="Enter your email"/>
                <button>Subscribe</button>
            </div>
        </div>
    );
}