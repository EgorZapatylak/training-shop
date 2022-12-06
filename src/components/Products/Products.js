import React from 'react';
import {Link} from "react-router-dom";
import Card from "../../pages/Main/img/gray.svg";
import './Products.css'

export function Products(props) {
    return (
        <>
            <div className='item_hed'>
                <div className='item_info'>
                    <h2>{props.title}</h2>
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
                {props.item.map((el) => (
                    <Link to="/product">
                        <div className='clothes'>
                            <div className='men_id'>
                                <img src={el.imageURL}/>
                            </div>
                            <div className='clothes_info'>
                                <p>{el.name}</p>
                                <div className='cost-rate'>
                                    <p>{el.price}</p>
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
                    </Link>))}
                <Link to="/men">
                    <button className='women_button'>See All</button>
                </Link>
            </div>
        </>
    );
}