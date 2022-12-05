import React from 'react';
import './Main.css';
// import {Swiper} from 'swiper/react'
import {Link} from "react-router-dom";
import {Hero} from "../../components/Hero/Hero";
import {Advantage} from "../../components/Advantage/Advantage";
import {Promice} from "../../components/Promice/Promice";
import {SpecialOffer} from "../../components/SpecialOffer/SpecialOffer";
import {Blog} from "../../components/Blog/Blog";
import {Products} from "../../components/Products/Products";

function main() {
    return (
        <section className='main'>
            <Hero/>
            <Advantage/>
            <div className='line'></div> {/*need sink about it =)*/}
            <Products title="Women's" />
            <div className='item_hed'>
                <div className='item_info'>
                    <h2>Men's</h2>
                </div>
                <div className='sort'>
                    <h3>New Arrivals</h3>
                    <h3>Specials</h3>
                    <h3>Bestseller</h3>
                    <h3>Most Viewed</h3>
                    <h3>Featured Products</h3>
                </div>
            </div>
            <div className='items'>
                <Link to="/product">
                    <div className='clothes'>
                        <div className='menid_1'></div>
                        <p>Men's tracksuit Q101</p>
                        <div className='cost-rate'>
                            <p>$30.00</p>
                            <div className='stars'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='menid_2'></div>
                    <p>Men's tracksuit Q101</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='menid_3'></div>
                    <p>Men's tracksuit Q101</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='menid_4'></div>
                    <p>Men's tracksuit Q101</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='menid_5'></div>
                    <p>Men's tracksuit Q101</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='menid_6'></div>
                    <p>Men's tracksuit Q101</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='menid_7'></div>
                    <p>Men's tracksuit Q101</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='menid_8'></div>
                    <p>Men's tracksuit Q101</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/men">
                    <button className='women_button'>See All</button>
                </Link>
            </div>
            <Promice />
            <SpecialOffer />
            <Blog />
        </section>
    )
}

export default main;