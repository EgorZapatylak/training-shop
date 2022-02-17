import React from 'react';
import './Product.css';


function product() {
    return(
        <section>
        <div className='product_header'>
            <div className='road'>
                <p>Home</p>
                <div className='ul'/>
                <p>Women</p>
                <div className='ul'/>
                <span>Women's tracksuit Q109</span>
            </div>
        <div className='share'>
                <div className='share_img'/>
                <p>Share</p>
        </div>
        </div>
        <div className='title'>
            <h1>Women's tracksuit Q109</h1>
        </div>
        <div className='rate_info'>
                <div className='reviews'>
                    <div className='star'>
                        <div className='stars_i'/>
                        <div className='stars_i'/>
                        <div className='stars_i'/>
                        <div className='stars_i'/>
                        <div className='stars_i'/>
                    </div>
                    <p>2 Reviews</p>
                </div>
                <div className='sa'>
                    <div className='sku'>
                        <p>SKU:</p>
                        <span>777</span>
                    </div>
                    <div className='availability'>
                        <p>Availability:</p>
                        <span>In Stock</span>
                    </div>
                </div>
        </div>
        <div className='content'>
            <div className='content_img'>
            <div className='content_row'>
                <div className='btn'>
                    <div className='but_up'></div>
                    <div className='but_down'></div>
                </div>
                <div className='slider'>
                    <div className='slider_1'></div>
                    <div className='slider_2'></div>
                    <div className='slider_3'></div>
                    <div className='slider_4'></div>
                </div>
            </div>    
                <div className='choise'>
                    <div className='btn_left'></div>
                    <div className='btn_rigth'></div>
                </div>
            </div>
            <div className='content_info'>
                <div className='saze_color'>
                    <div className='color'>
                        <p>Color:</p>
                        <span>Blue</span>
                    </div>
                    <div className='color_img'>
                    <img className='color_1'/>
                    <img className='color_2'/>
                    <img className='color_3'/>
                    <img className='color_4'/>
                    </div>
                    <div className='size'>
                        <p>Size:</p>
                        <span>S</span>
                    </div>
                    <div className='size_info'>
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
                    <div className='size_guide'>
                        <div className='size_img'/>
                        <p>Size guide</p>
                    </div>
                    <div className='line'></div>
                </div>
                <div className='price'></div>
                <div className='ship'></div>
                <div className='pay'></div>
                <div className='description'></div>
                <div className='add_inf'></div>
                <div className='reviews'></div>
            </div>
        </div>
        <div className='related'></div>
        </section>
    )
}


export default product;