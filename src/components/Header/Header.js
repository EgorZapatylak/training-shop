import React, {useState} from 'react';
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
import {Link} from "react-router-dom";

export function Header() {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className="header_container">
            <div className="top_bar">
                <div className='info'>
                    <div className='phone'>
                        <img src={Phone} alt=''/>
                        <p>+375 29 100 20 30</p>
                    </div>
                    <div className='location'>
                        <img src={Location} alt=''/>
                        <p>Belarus, Gomel, Lange 17</p>
                    </div>
                    <div className='time'>
                        <img src={Clock} alt=''/>
                        <p>All week 24/7</p>
                    </div>
                </div>
                <div className='social'>
                    <a href='https://www.facebook.com/'>
                        <img src={Facebook} alt=''/>
                    </a>
                    <a href='https://twitter.com/'>
                        <img src={Twitter} alt=''/>
                    </a>
                    <a href='https://www.instagram.com/'>
                        <img src={Instagram} alt=''/>
                    </a>
                    <a href='https://www.pinterest.com/'>
                        <img src={Pinterest} alt=''/>
                    </a>
                </div>
            </div>
            <div className="nav">
                <div className='logo'>
                    <Link to="/"><h1>CleverShop</h1></Link>
                </div>
                <div className='nav-item'>
                    <ul className={menuActive ? 'active' : ''} onClick={()=> setMenuActive(false)}>
                        <li>
                            <a href='#about'>About Us</a>
                        </li>
                        <li>
                            <Link to="/women"><a href='#women'>Women</a></Link>
                        </li>
                        <li>
                            <Link to="/men"><a href='#men'>Men</a></Link>
                        </li>
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
                    <a href='https://www.google.by/'>
                        <img src={Search} alt=''/>
                    </a>
                    <a href='https://www.google.by/'>
                        <img src={Global} alt=''/>
                    </a>
                    <a href='https://www.google.by/'>
                        <img src={User} alt=''/>
                    </a>
                    <a href='https://www.google.by/'>
                        <img src={Shopping} alt=''/>
                    </a>
                    <nav>
                        <div className="burger_btn" onClick={() => setMenuActive(!menuActive)}>
                            <span/>
                        </div>
                    </nav>
                </div>

            </div>
            <div className='line'></div>
        </div>
    )
}

