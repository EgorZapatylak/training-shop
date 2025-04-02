import React, {useState} from 'react';
import style from './Header.module.css';
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
        <div className={style.header_container}>
            <div className={style.top_bar}>
                <div className={style.info}>
                    <div className={style.phone}>
                        <img src={Phone} alt=''/>
                        <p>+375 29 100 20 30</p>
                    </div>
                    <div className={style.location}>
                        <img src={Location} alt=''/>
                        <p>Belarus, Gomel, Lange 17</p>
                    </div>
                    <div className={style.time}>
                        <img src={Clock} alt=''/>
                        <p>All week 24/7</p>
                    </div>
                </div>
                <div className={style.social}>
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
            <div className={style.nav}>
                <div className={style.logo}>
                    <Link to="/"><h1>CleverShop</h1></Link>
                </div>
                <div className={style.nav_item}>
                    <ul className={menuActive ? style.active : ''} onClick={() => setMenuActive(false)}>
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
                <div className={style.instryment}>
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
                    <Link to='/dashboard'>
                        <img
                        src={User}
                        alt=''
                        style={{cursor: 'pointer'}}
                    />
                    </Link>
                    <div className={style.cart_icon} onClick={() => dispatch(openCart())}>
                        <img src={Shopping} alt="Cart"/>
                        {totalItems > 0 && <span className={style.cart_count}>{totalItems}</span>}
                    </div>
                    <nav>
                        <div className={menuActive ? style.toggle : style.burger_btn}
                             onClick={() => setMenuActive(!menuActive)}>
                            <span className={menuActive ? style.active : ''}/>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='line'></div>
            {/* Модальное окно корзины */}
            {isCartOpen && <div className={style.cart_overlay} onClick={handleOverLayClick}></div>}

            {isCartOpen && (
                <div className={style.cart_modal}>
                    <div className={style.cart_modal_content} onClick={(e) => e.stopPropagation()}>
                        <Cart/>
                    </div>
                </div>
            )}
        </div>
    )
}

