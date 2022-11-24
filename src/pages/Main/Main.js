import React from 'react';
import './Main.css';

import Banner from '../Main/img/hero/banner.jpg';
import Women from '../Main/img/hero/women.jpg';
import Men from '../Main/img/hero/men.jpg';
import Accessories from '../Main/img/hero/accessories.jpg';

import Truck from '../Main/img/advantage/truck.svg'
import Refresh from '../Main/img/advantage/refresh.svg'
import Support from '../Main/img/advantage/support.svg'
import {Link} from "react-router-dom";

function main() {
    return (
        <section className='main'>
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
            <div className='line'></div>
            <div className='item_hed'>
                <div className='item_info'>
                    <h2>Women's</h2>
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
                        <div className='women_1'></div>
                        <p>Women's tracksuit Q109</p>
                        <div className='cost-rate'>
                            <p>$30.00</p>
                            <div className='stars'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='women_2'></div>
                    <p>Women's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='women_3'></div>
                    <p>Women's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='women_4'></div>
                    <p>Women's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='women_5'></div>
                    <p>Women's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='women_6'></div>
                    <p>Women's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='women_7'></div>
                    <p>Women's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='women_8'></div>
                    <p>Women's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/women">
                    <button className='women_button'>See All</button>
                </Link>
            </div>
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
            <div className='promice'>
                <div className='new_colection'>
                    <div className='col_item'>
                        <p>New Season</p>
                        <span>lookbook collection</span>
                    </div>
                </div>
                <div className='sale'>
                    <div className='sale_item'>
                        <p>Sale</p>
                        <span>Get UP to 50% off</span>
                    </div>
                </div>
            </div>
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
            <div className='blog_header'>
                <h2>LATEST FROM BLOG</h2>
                <p>SEE ALL</p>
            </div>
            <div className='blog_post'>
                <div className='box_1'>
                    <div className='box_info'>
                        <h3>The Easiest Way to Break</h3>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas <br/> and praising
                            pain was bor</p>
                        <div className='data'>
                            <p>April 6, 2022<span>Read More</span></p>
                        </div>
                    </div>
                </div>
                <div className='box_2'>
                    <div className='box_info'>
                        <h3>Wedding Season</h3>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas <br/> and praising
                            pain was bor</p>
                        <div className='data'>
                            <p>April 6, 2022<span>Read More</span></p>
                        </div>
                    </div>
                </div>
                <div className='box_3'>
                    <div className='box_info'>
                        <h3>Recent Favorites On Repeat</h3>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas <br/> and praising
                            pain was bor</p>
                        <div className='data'>
                            <p>April 6, 2022<span>Read More</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default main;