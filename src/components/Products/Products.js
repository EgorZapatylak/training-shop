import React from 'react';
import {Link} from "react-router-dom";
import Card from "../../pages/Main/img/gray.svg";
import './Products.css'

export function Products () {
    return (
        <>
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
                            <div className='clothes_info'>
                                <p>Women's tracksuit Q109</p>
                                <div className='cost-rate'>
                                    <p>$30.00</p>
                                    <div className='stars'></div>
                                </div>
                                <div className='clothes_event'>
                                    <div className="clothes_info_img">
                                        <img width={40} height={40} src={Card} alt='blue'/>
                                        <img width={40} height={40} src={Card} alt='white'/>
                                        <img width={40} height={40} src={Card} alt='black'/>
                                        <img width={40} height={40} src={Card} alt='grey'/>
                                    </div>
                                    <div className='clothes_info_size'>
                                        <div className='xs'>
                                            <p>XS</p>
                                        </div>
                                        <div className='s'>
                                            <p>S</p>
                                        </div>
                                        <div className='m'>
                                            <p>M</p>
                                        </div>
                                        <div className='l'>
                                            <p>L</p>
                                        </div>
                                    </div>
                                    <div className='clothes_info_event'>
                                        <button>ADD TO CART</button>
                                        <div className="heart_1"></div>
                                        <div className="scale_1"></div>
                                    </div>
                                </div>
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
        </>
    );
}