import React from 'react';
import './Header.css';
import Phone from '../Header/img/phone.svg';
import Location from '../Header/img/location.svg';
import Clock from '../Header/img/clock.svg';
import Facebook from '../Header/img/facebook_top.svg';
import Twitter from '../Header/img/twitter_top.svg';
import Instagram from '../Header/img/instagram_top.svg';
import Pinterest from '../Header/img/pinterest_top.svg';
import Search from '../Header/img/search.svg';
import Global from '../Header/img/global.svg';
import User from '../Header/img/user.svg';
import Shopping from '../Header/img/shopping-bag.svg';

function header() {
    return (
        <div className="header_container">
            <div className="top_bar">
                <div className='info'>
                    <div className='phone'>
                        <img src ={Phone} alt =''/>
                        <p>+375 29 100 20 30</p>
                    </div>
                    <div className='location'>
                        <img src ={Location} alt =''/>
                        <p>Belarus, Gomel, Lange 17</p>
                    </div>
                    <div className='time'>
                        <img src ={Clock} alt =''/>
                        <p>All week 24/7</p>
                    </div>
                </div>
                <div className='social'>
                    <a href='https://www.facebook.com/'>
                        <img src = {Facebook} alt='' />
                    </a>
                    <a href='https://twitter.com/'>
                        <img src = {Twitter} alt='' />
                    </a>
                    <a href='https://www.instagram.com/'>
                        <img src = {Instagram} alt='' />
                    </a>
                    <a href='https://www.pinterest.com/'>
                        <img src = {Pinterest} alt='' />
                    </a>
                </div> 
            </div>
            <div className="nav">
                <div className='logo'>
                    <h1>CleverShop</h1>
                </div>
                <div className='nav-item'>
                    <ul>
                        <li>
                        <a href='#about'>About Us</a></li>
                        <li>
                        <a href='#women'>Women</a></li>
                        <li>
                        <a href='#men'>Men</a></li>
                        <li>
                        <a href='#beauty'>Beauty</a></li>
                        <li>
                        <a href='#accessories'>Accessories</a></li>
                        <li>
                        <a href='#blog'>Blog</a></li>
                        <li>
                        <a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className='instryment'>
                    <a href='#'>
                        <img src = {Search} alt='' />
                    </a>
                    <a href='#'>
                        <img src = {Global} alt='' />
                    </a>
                    <a href='#'>
                        <img src = {User} alt='' />
                    </a>
                    <a href='#'>
                        <img src = {Shopping} alt='' />
                    </a>
                </div>
            </div>
            <div className='line'></div>
        </div>
    )
}

export default header;
