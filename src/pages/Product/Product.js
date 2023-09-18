import React, {useState} from 'react';
import './Product.css';
import Choise from './img/item_1_992.svg';
import Slider_1 from './img/smol_1.png';
import Slider_2 from './img/smol_1.png';
import Slider_3 from './img/smol_1.png';
import Slider_4 from './img/smol_1.png';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Controller, FreeMode, Thumbs, Pagination, Scrollbar} from "swiper";


export default function Product(props) {

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

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
                    <div className='btn_down'></div>
                    <div className='btn_up'></div>
                </div>
                <div className='slider'>
                    <Swiper
                        modules={[Controller,Navigation, Thumbs]}
                        onSwiper={setFirstSwiper}
                        // controller={{ control: secondSwiper &&! secondSwiper.destroyed? secondSwiper:null }}
                        className='slider-top'
                        slidesPerView={4}
                        direction={'vertical'}
                        spaceBetween={16}
                        navigation = {{
                            nextEl: '.btn_down',
                            prevEl: '.btn_up'
                        }}
                    >
                        <SwiperSlide>
                            <img src={Slider_1} alt=''/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Slider_2} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Slider_3} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Slider_4} alt='' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
                <div className='choise'>
                    <Swiper
                        modules={[Controller, Navigation, Thumbs, FreeMode, Pagination]}
                        onSwiper={setSecondSwiper}
                        // controller={{ control: firstSwiper &&! firstSwiper.destroyed? firstSwiper:null}}
                        // modules={[FreeMode, Navigation, Thumbs, Controller]}
                        thumbs={{ swiper: firstSwiper &&! firstSwiper.destroyed? firstSwiper:null }}
                        navigation={{
                            nextEl: '.btn_right',
                            prevEl: '.btn_left'
                        }}
                        >
                        <SwiperSlide><img src={Choise} alt=''/></SwiperSlide>
                        <SwiperSlide><img src={Choise} alt=''/></SwiperSlide>
                        <SwiperSlide><img src={Choise} alt=''/></SwiperSlide>
                        <SwiperSlide><img src={Choise} alt=''/></SwiperSlide>
                    </Swiper>

                    <div className='btn_left'></div>
                    <div className='btn_right'></div>
                </div>
            </div>
            <div className='content_info'>
                <div className='saze_color'>
                    <div className='color'>
                        <p>Color:</p>
                        <span>Blue</span>
                    </div>
                    <div className='color_img'>
                    <img className='color_1' alt=''/>
                    <img className='color_2' alt=''/>
                    <img className='color_3' alt=''/>
                    <img className='color_4' alt=''/>
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
                <div className='price'>
                    <p>$379.99</p>
                    <button>ADD TO CART</button>
                    <div className="heart_1"></div>
                    <div className="scale_1"></div>
                </div>
                <div className="line"></div>
                <div className='ship'>
                    <div className="shipping_prod">
                        <div className="shipping_prod_img"></div>
                        <p>Shipping & Delivery</p>
                    </div>
                    <div className="returns_prod">
                        <div className="returns_prod_img"></div>
                        <p>Returns & Exchanges</p>
                    </div>
                    <div className="ask_prod">
                        <div className="ask_prod_img"></div>
                        <p>Ask a question</p>
                    </div>
                </div>
                <div className='safe'>
                    <p>guaranteed safe checkout</p>
                </div>
                <div className='pay'>
                    <div className='pay_1'/>
                    <div className='pay_2'/>
                    <div className='pay_3'/>
                    <div className='pay_4'/>
                    <div className='pay_5'/>
                    <div className='pay_6'/>
                    <div className='pay_7'/>
                </div>
                <div className="line"></div>
                <div className='description'>
                    <p>DESCRIPTION</p>
                </div>
                <div className="line"></div>
                <div className='add_inf'>
                    <div className="add_inf_text">
                        ADDITIONAL INFORMATION
                    </div>
                    <div className="add_inf_color">Color:
                        <p>Blue, White, Black, Grey</p>
                    </div>
                    <div className="add_inf_color">Size:
                    <p>XS, S, M, L</p>
                    </div>
                    <div className="add_inf_color">Material:
                    <p>	100% Polyester</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className='reviews_d'>
                    <div className="reviews_d_title">
                        REVIEWS
                    </div>
                    <div className="reviews_d_status">
                        <div className="reviews_d_status_info">
                            <div className="stars"></div>
                            <p>2 Reviews</p>
                        </div>
                        <div className="reviews_d_status_write">
                            <div className="write"></div>
                            <p>Write a review</p>
                        </div>
                    </div>
                    <div className="reviews_d_feedback">
                        <div className="reviews_d_feedback_info">
                            <h5>Oleh Chabanov</h5>
                            <div className="stars"></div>
                        </div>
                        <p>On the other hand, we denounce with righteous indignation and like
                            men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                        <div className="reviews_d_feedback_info">
                            <h5>ShAmAn design</h5>
                            <div className="stars"></div>
                        </div>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        </div>
        <div className='related'>
            <div className="related_status">
                <p>RELATED PRODUCTS</p>
                <div className='related_status_btn'>
                    <div className='related_left'></div>
                    <div className='related_right'></div>
                </div>
            </div>
                <div className="related_img">
                    <Swiper
                        modules={[Navigation]}
                        breakpoints = {{
                            320: {slidesPerView:1},
                            375: {slidesPerView:2},
                            745: {slidesPerView:3},
                            1024: {slidesPerView:4}
                        }}
                        navigation={{
                            nextEl: '.related_right',
                            prevEl: '.related_left'
                        }}
                    >
                    <SwiperSlide>
                        <div className='clothes'>
                            <div className='id_1'></div>
                            <p>Women's tracksuit Q109</p>
                            <div className='cost-rate'>
                                <p>$30.00</p>
                                <div className='stars'></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='clothes'>
                            <div className='id_2'></div>
                            <p>Women's tracksuit Q109</p>
                            <div className='cost-rate'>
                                <p>$30.00</p>
                                <div className='stars'></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='clothes id3'>
                            <div className='id_3'></div>
                            <p>Women's tracksuit Q109</p>
                            <div className='cost-rate'>
                                <p>$30.00</p>
                                <div className='stars'></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='clothes'>
                            <div className='id_4'></div>
                            <p>Women's tracksuit Q109</p>
                            <div className='cost-rate'>
                                <p>$30.00</p>
                                <div className='stars'></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='clothes'>
                            <div className='id_1'></div>
                            <p>Women's tracksuit Q109</p>
                            <div className='cost-rate'>
                                <p>$30.00</p>
                                <div className='stars'></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='clothes'>
                            <div className='id_2'></div>
                            <p>Women's tracksuit Q109</p>
                            <div className='cost-rate'>
                                <p>$30.00</p>
                                <div className='stars'></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='clothes'>
                            <div className='id_3'></div>
                            <p>Women's tracksuit Q109</p>
                            <div className='cost-rate'>
                                <p>$30.00</p>
                                <div className='stars'></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='clothes'>
                            <div className='id_4'></div>
                            <p>Women's tracksuit Q109</p>
                            <div className='cost-rate'>
                                <p>$30.00</p>
                                <div className='stars'></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                    </div>
        </div>
        </section>
    )
}