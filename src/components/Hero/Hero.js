import React from 'react';
import Banner from "./img/banner.jpg";
import Women from "./img/women.jpg";
import Men from "./img/men.jpg";
import Accessories from "./img/accessories.jpg";
import './Hero.css'
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";

export function Hero() {
    return (
        <div className='hero'>
            <div className='mySwiper'>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.chevron-right',
                        prevEl: '.chevron-left'
                    }}
                >
                    <SwiperSlide><img src={Banner} alt=''/></SwiperSlide>
                    <SwiperSlide><img src={Banner} alt=''/></SwiperSlide>
                    <SwiperSlide><img src={Banner} alt=''/></SwiperSlide>
                </Swiper>
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
                        <Link to="/women">
                            <button className='green_button'>Women</button>
                        </Link>
                    </div>
                    <div className='men'>
                        <img src={Men} alt=''/>
                        <Link to='/men'>
                            <button className='green_button'>Men</button>
                        </Link>
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
