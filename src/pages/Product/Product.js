import React, {useCallback, useEffect, useRef, useState} from 'react';
import './Product.css';
import {Products_base} from "../../Products_base";
import Choise from './img/item_1_992.svg';
import Slider_1 from './img/smol_1.png';
import Slider_2 from './img/smol_1.png';
import Slider_3 from './img/smol_1.png';
import Slider_4 from './img/smol_1.png';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, FreeMode, Thumbs} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import {useDispatch} from "react-redux";
import {addToCart} from "../../cartSlice";


export default function Product() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [mainSwiper, setMainSwiper] = useState(null);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [isInCart, setIsInCart] = useState(false);
    const dispatch = useDispatch();

    // Рефы для кнопок Swiper
    const prevThumbsRef = useRef(null);
    const nextThumbsRef = useRef(null);
    const prevMainRef = useRef(null);
    const nextMainRef = useRef(null);

    const handleColorSelect = (color) => {
        if (selectedColor === color) {
            // Если пользлватель нажал на ужевыбранный цвет, сбрасываем его
            setSelectedColor(null);
        } else {
            // Устанавливаем новый выбранный цвет
            setSelectedColor(color);
        }
    };

    const handleSizeSelect = (size) => {
        if (selectedSize === size) {
            // Если пользлватель нажал на ужевыбранный размер, сбрасываем его
            setSelectedSize(null);
        } else {
            // Устанавливаем новый выбранный размер
            setSelectedSize(size);
        }
    };

    const handleCartButtonClick = () => {
        // if (isInCart) {
        //     // Удаление из корзины
        //     setSelectedColor(null);
        //     setSelectedSize(null);
        //     setIsInCart(false);
        //     console.log("Товар удален из корзины");
        // } else {
        //     // Добавление в корзину
        //     if (selectedColor && selectedSize) {
        //         setIsInCart(true);
        //         console.log("Товар добавлен в корзину:", {
        //             color: selectedColor,
        //             size: selectedSize,
        //         });
        //     } else {
        //         alert("Пожалуйста,выберите цвет и размер");
        //     }
        // }
        if (!selectedColor || !selectedSize) {
            alert("Пожалуйста,выберите цвет и размер");
            return;
        }

        dispatch(
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image:product.imageURL,
                color:selectedColor,
                size:selectedSize,
            })
        );
    };

    const updateSwiper = useCallback(() => {
        if (thumbsSwiper) {
            console.log("🔄 Принудительное обновление Swiper...");

            setTimeout(() => {
                const prevBtn = document.querySelector('.btn_down');
                const nextBtn = document.querySelector('.btn_up');

                if (prevBtn && nextBtn) {
                    console.log("✅ Кнопки Swiper найдены, обновляем навигацию!");

                    // Принудительно привязываем кнопки
                    thumbsSwiper.params.navigation.prevEl = prevBtn;
                    thumbsSwiper.params.navigation.nextEl = nextBtn;

                    // Перезапускаем навигацию
                    thumbsSwiper.navigation.init();
                    thumbsSwiper.navigation.update();
                    thumbsSwiper.update();

                    prevBtn.classList.remove('swiper-button-disabled', 'swiper-button-lock');
                    nextBtn.classList.remove('swiper-button-disabled', 'swiper-button-lock');

                    console.log("✅ Кнопки Swiper разблокированы и работают!");
                } else {
                    console.log("⏳ Кнопки ещё не появились, пробуем снова...");
                    setTimeout(updateSwiper, 300); // Пробуем ещё раз через 300 мс
                }
            }, 300);
        }
    },[thumbsSwiper]);
//
    useEffect(() => {
        if (thumbsSwiper && mainSwiper) {
// Синхронизируем кнопки
            nextThumbsRef.current.onclick = () => {
                thumbsSwiper.slideNext();
                mainSwiper.slideNext();
            };
            prevThumbsRef.current.onclick = () => {
                thumbsSwiper.slidePrev();
                mainSwiper.slidePrev();
            };
        }
        updateSwiper();
    }, [thumbsSwiper, mainSwiper, updateSwiper]);

    // Проверяем, есть ли данные

    if (!Products_base?.men?.length) {
        return <p>Product not found</p>;
    }

    const product = Products_base.men[0];

    return (
        <section>
            <div className='product_header'>
                <div className='road'>
                    <p>Home</p>
                    <div className='ul'/>
                    <p>Men</p>
                    <div className='ul'/>
                    <span>{product.name}</span>
                </div>
                <div className='share'>
                    <div className='share_img'/>
                    <p>Share</p>
                </div>
            </div>
            <div className='title'>
                <h1>{product.name}</h1>
            </div>
            {/*<div className='rate_info'>*/}
            {/*    <div className='reviews'>*/}
            {/*        <div className='star'>*/}
            {/*            <div className='stars_i'/>*/}
            {/*            <div className='stars_i'/>*/}
            {/*            <div className='stars_i'/>*/}
            {/*            <div className='stars_i'/>*/}
            {/*            <div className='stars_i'/>*/}
            {/*        </div>*/}
            {/*        <p>2 Reviews</p>*/}
            {/*    </div>*/}
            {/*    <div className='sa'>*/}
            {/*        <div className='sku'>*/}
            {/*            <p>SKU:</p>*/}
            {/*            <span>777</span>*/}
            {/*        </div>*/}
            {/*        <div className='availability'>*/}
            {/*            <p>Availability:</p>*/}
            {/*            <span>In Stock</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className='content'>
                <div className='content_img'>
                    <div className='content_row'>
                        {/*Кнопки управления миниатюрным*/}
                        <div className='btn'>
                            <div className='btn_up' ref={nextThumbsRef}></div>
                            <div className='btn_down' ref={prevThumbsRef}></div>
                        </div>
                        <Swiper
                            modules={[Navigation, Thumbs]}
                            onSwiper={(swiper) => {
                                setThumbsSwiper(swiper);
                                setTimeout(updateSwiper, 500)// Вызываем после инициализации
                            }}
                            className="slider-top"
                            slidesPerView={4}
                            direction="vertical"
                            spaceBetween={16}
                            loop={false}
                            navigation={{
                                nextEl: nextThumbsRef.current,
                                prevEl: prevThumbsRef.current
                            }}
                            onSlideChange={() => mainSwiper?.slideTo(thumbsSwiper.activeIndex)}
                        >
                            <SwiperSlide><img src={Slider_1} alt='Описание изоражения 1'/></SwiperSlide>
                            <SwiperSlide><img src={Slider_2} alt='Описание изоражения 2'/></SwiperSlide>
                            <SwiperSlide><img src={Slider_3} alt='Описание изоражения 3'/></SwiperSlide>
                            <SwiperSlide><img src={Slider_4} alt='Описание изоражения 4'/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='choise'>
                        <Swiper
                            modules={[Navigation, Thumbs, FreeMode]}
                            onSwiper={setMainSwiper}
                            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                            navigation={{
                                nextEl: nextMainRef.current,
                                prevEl: prevMainRef.current
                            }}
                            spaceBetween={10}
                            onSlideChange={() => thumbsSwiper?.slideTo(mainSwiper.activeIndex)}
                        >
                            <SwiperSlide><img src={Choise} alt='Описание изоражения 1'/></SwiperSlide>
                            <SwiperSlide><img src={Choise} alt='Описание изоражения 2'/></SwiperSlide>
                            <SwiperSlide><img src={Choise} alt='Описание изоражения 3'/></SwiperSlide>
                            <SwiperSlide><img src={Choise} alt='Описание изоражения 4'/></SwiperSlide>
                        </Swiper>
                        <div className='btn_left' ref={prevMainRef}></div>
                        <div className='btn_right' ref={nextMainRef}></div>
                    </div>
                </div>
                <div className='content_info'>
                    <div className='saze_color'>
                        <div className='color'>
                            <p>Color:</p>
                            {/* Отображение выбранного цвета*/}
                            <span>{selectedColor}</span>
                        </div>
                        <div className='color_img'>
                            {/* Оторажение всех достуаных цветов */}
                            {[...new Set(product.images.map((img) => img.color))].map((color, index) => (
                                <button
                                    key={index}
                                    className={selectedColor === color ? 'selected' : ''}
                                    onClick={() => handleColorSelect(color)}>
                                    <img src={product.imageURL} alt={color} title={color}/>
                                </button>
                            ))}
                        </div>
                        <div className='size'>
                            <p>Size:</p>
                            {/*<span>{product.sizes[0]}</span>*/}
                            <span>{selectedSize}</span>
                        </div>
                        <div className='size_info'>
                            {product.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={selectedSize === size ? 'selected' : ''}
                                    onClick={() => handleSizeSelect(size)}>{size.slice(0,-3)}</button>
                            ))}
                        </div>
                        <div className='size_guide'>
                            <div className='size_img'/>
                            <p>Size guide</p>
                        </div>
                        <div className='line'></div>
                    </div>
                    <div className='price'>
                        <p>${product.price}.00</p>
                        <button onClick={handleCartButtonClick}>{
                            isInCart ? 'REMOVE FROM CART' : 'ADD TO CART'
                        }</button>
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
                            <p> 100% Polyester</p>
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
                            {product.reviews.map((rev, index) => (
                                <div key={index}>
                                    <div className="reviews_d_feedback_info">
                                        <h5>{rev.name}</h5>
                                        <div className="stars"> {rev.rating} </div>
                                    </div>
                                    <p>{rev.text}</p>
                                </div>
                            ))}
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
                        breakpoints={{
                            320: {slidesPerView: 1},
                            375: {slidesPerView: 2},
                            745: {slidesPerView: 3},
                            1024: {slidesPerView: 4}
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