import React from 'react';
import './Footer.css';

function footer() {
    return (
        <div className='footer'>
        <div className='footer_top'>
            <div>
                <p>BE IN TOUCH WITH US:</p>
            </div>
            <div className='join'>
                <input type="email" placeholder="Enter your email" />
                <button>Join Us</button>
            </div>
            <div className='social_bot'>
                <a href='https://www.facebook.com/'><div className='f_1' /></a>
                <a href='https://twitter.com/'><div className='f_2' /></a>
                <a href='https://www.instagram.com'><div className='f_3' /></a>
                <a href='https://www.pinterest.com/'><div className='f_4' /></a>
            </div>
        </div><div className='footer_main'>
                <div className='categories'>
                    <h3>Categories</h3>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Accessories</a>
                    <a href="#">Beauty</a>
                </div>
                <div className='categories'>
                    <h3>Information</h3>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Blog</a>
                    <a href="#">FAQs</a>
                </div>
                <div className='categories'>
                    <h3>Useful Links</h3>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Returns & Exchanges</a>
                    <a href="#">Shipping & Delivery</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className='categories'>
                    <h3>Contact Us</h3>
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
            </div><div className='footer_bot'>
                <div className='prava'>
                    <p>Copyright © 2032 all rights reserved</p>
                </div>
                <div className='spons'>
                    <div className='spons_1'/>
                    <div className='spons_2'/>
                    <div className='spons_3'/>
                    <div className='spons_4'/>
                    <div className='spons_5'/>
                    <div className='spons_6'/>
                    <div className='spons_7'/>
                </div>
                <div className='clever'>
                    <a href='https://clevertec.ru/study/frontend.html'>Clevertec.ru/training</a>
                </div>
            </div>
        </div>
    )
}

export default footer;