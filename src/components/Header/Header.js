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
import {useDispatch, useSelector} from "react-redux";
import {Cart} from "../Cart/Cart";
import {closeCart, openCart} from "../../cartSlice";
import {SearchBar} from "../SearchBar";

export function Header() {

    const [menuActive, setMenuActive] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const cartItems = useSelector((state) => state.cart.items); // Получаем данные из корзины Redux
    const isCartOpen = useSelector((state) => state.cart.isCartOpen); // Состояние открытия корзины
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); // Считакм количество товаров

    const dispatch = useDispatch();

    const handleOverLayClick = (e) => {
        if (e.target === e.currentTarget) { // Проверяем, что клик был по фону
            dispatch(closeCart());
        }
    }

    if (menuActive || isCartOpen) {
        document.body.style.overflow = 'hidden'; //Отключаем прокрутку страницы
    } else {
        document.body.style.overflow = 'unset'; // Включаем прокрутку страницы
    }

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
                    <ul className={menuActive ? 'active' : ''} onClick={() => setMenuActive(false)}>
                        <li>
                            <Link to="/about"><a href='/about'>About Us</a></Link>
                        </li>
                        <li>
                            <Link to="/women"><a href='/women'>Women</a></Link>
                        </li>
                        <li>
                            <Link to="/men"><a href='/men'>Men</a></Link>
                        </li>
                        <li>
                            <Link to="/beauty"><a href='/beauty'>Beauty</a></Link>
                        </li>
                        <li>
                            <Link to="/accessories"><a href='/accessories'>Accessories</a></Link></li>
                        <li>
                            <Link to="/blog"><a href='/blog'>Blog</a></Link>
                        </li>
                        <li>
                            <Link to="/contact"><a href='/contact'>Contact</a></Link>
                        </li>
                    </ul>
                </div>
                <div className='instryment'>
                        <img
                            src={Search}
                            alt=''
                            onClick={()=> setIsSearchVisible(!isSearchVisible)}
                            style={{cursor: 'pointer'}}
                        />
                    {isSearchVisible && <SearchBar closeSearch={()=>setIsSearchVisible(false)}/>}
                    <a href='https://www.google.by/'>
                        <img src={Global} alt=''/>
                    </a>
                    <a href='https://www.google.by/'>
                        <img src={User} alt=''/>
                    </a>
                    <div className='cart_icon' onClick={() => dispatch(openCart())}>
                        <img src={Shopping} alt="Cart"/>
                        {totalItems > 0 && <span className='cart_count'>{totalItems}</span>}
                    </div>
                    <nav>
                        <div className={menuActive ? 'toggle' : 'burger_btn'}
                             onClick={() => setMenuActive(!menuActive)}>
                            <span className={menuActive ? 'active' : ''}/>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='line'></div>
            {/* Модальное окно корзины */}
            {isCartOpen && <div className='cart_overlay' onClick={handleOverLayClick}></div>}

            {isCartOpen && (
                <div className='cart_modal'>
                    <div className='cart_modal_content' onClick={(e) => e.stopPropagation()}>
                        <Cart/>
                    </div>
                </div>
            )}
        </div>
    )
}

