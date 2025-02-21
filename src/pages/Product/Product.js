import React, {useCallback, useEffect, useRef, useState} from 'react';
import './Product.css';
import {Products_base} from "../../Products_base";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, FreeMode, Thumbs} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../cartSlice";
import {StarRating} from "../../components/StarRating/StarRating";
import {useParams} from "react-router";
import {Link} from "react-router-dom";


export default function Product() {

    const {id} = useParams(); // Извлекаем id из URL
    const product = Products_base.men.find((item) => item.id === parseInt(id)); // Ищем товар по id

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [mainSwiper, setMainSwiper] = useState(null);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    // Рефы для кнопок Swiper
    const prevThumbsRef = useRef(null);
    const nextThumbsRef = useRef(null);
    const prevMainRef = useRef(null);
    const nextMainRef = useRef(null);

    const reviewCount = product.reviews.length;

    const isInCart = cartItems.some(
        (item) =>
            item.id === product.id &&
            item.size === selectedSize &&
            item.color === selectedColor
    );

    const handleColorSelect = (color) => {
        // if (selectedColor === color) {
        //     // Если пользлватель нажал на ужевыбранный цвет, сбрасываем его
        //     setSelectedColor(null);
        // } else {
        //     // Устанавливаем новый выбранный цвет
        //     setSelectedColor(color);
        // }
        setSelectedColor(color === selectedColor ? null : color);
    };

    const handleSizeSelect = (size) => {
        // if (selectedSize === size) {
        //     // Если пользлватель нажал на ужевыбранный размер, сбрасываем его
        //     setSelectedSize(null);
        // } else {
        //     // Устанавливаем новый выбранный размер
        //     setSelectedSize(size);
        // }
        setSelectedSize(size === selectedSize ? null : size);
    };

    const handleCartButtonClick = () => {
        if (isInCart) {
            // Удаление из корзины
            dispatch(
                removeFromCart({
                    id: product.id,
                    size: selectedSize,
                    color: selectedColor,
                })
            );
            setSelectedColor(null);
            setSelectedSize(null);
            console.log('Товар удален из корзины');
        } else {
            if (selectedColor && selectedSize) {
                // Добавление в корзину
                dispatch(
                    addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.imageURL,
                        color: selectedColor,
                        size: selectedSize,
                    })
                );
                console.log('Товар добавлен в корзину', {
                    id: product.id,
                    size: selectedSize,
                    color: selectedColor,
                });

                //Cохраняем id последнего добавленного товара в localStorage
                localStorage.setItem('lastViewedProduct', product.id);
            } else {
                alert('Пожалуйста, выберите цвет и размер');
            }
        }
    }

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
                    console.log(product.imageURL)
                } else {
                    console.log("⏳ Кнопки ещё не появились, пробуем снова...");
                    setTimeout(updateSwiper, 300); // Пробуем ещё раз через 300 мс

                }
            }, 300);
        }
    }, [thumbsSwiper]);

    useEffect(() => {
        // Прокрутка страницы к началу
        window.scrollTo(0, 0);
    }, []); // Пустой массив зависимостей, чтобы эффект срабатывал только при монтировани компонента

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

    if (!product) {
        return <p>Товар не найден</p>;
    }

    return (
        <section>
            <div className='product_header'>
                <div className='road'>
                    <Link to='/'>
                        <p>Home</p>
                    </Link>
                    <div className='ul'/>
                    <Link to='/men'>
                        <p>Men</p>
                    </Link>
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
            <div className='rate'>
                <div className='reviews'>
                    <StarRating rating={product.rating}/>
                    <p>{reviewCount} Reviews</p>
                </div>
                <div className='rate_rate'>
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
                            {product.images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={product.imageURL} alt={product.name} height='113'/>
                                </SwiperSlide>
                            ))}
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
                            {product.images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={product.imageURL} alt={product.name}/>
                                </SwiperSlide>
                            ))}
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
                            <span>{selectedSize ? selectedSize.replace('INT', '') : ''}</span>
                        </div>
                        <div className='size_info'>
                            {product.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={selectedSize === size ? 'selected' : ''}
                                    onClick={() => handleSizeSelect(size)}>{size.slice(0, -3)}</button>
                            ))}
                        </div>
                        <div className='size_guide'>
                            <div className='size_img'/>
                            <p>Size guide</p>
                        </div>
                        <div className='line'></div>
                    </div>
                    <div className='price'>
                        <p>$ {product.discount
                            ? `${(product.price * (1 + parseFloat(product.discount) / 100))}`
                            : `${product.price.toFixed(2)}`
                        }
                        </p>
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
                            <p>{[...new Set(product.images.map((img) => img.color))]}</p>
                        </div>
                        <div className="add_inf_color">Size:
                            <p>{[...new Set(product.sizes.join(', ').slice(0, -3))]}</p>
                        </div>
                        <div className="add_inf_color">Material:
                            <p>{product.material}</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className='reviews_section'>
                        <div className="reviews_section_title">
                            REVIEWS
                        </div>
                        <div className='reviews_header'>
                            <div className='reviews_header_reviews'>
                                <StarRating rating={product.rating}/>
                                <p>{reviewCount} Reviews</p>
                            </div>
                            <div className="reviews_header_write">
                                <p>Write a review</p>
                            </div>
                        </div>
                        {reviewCount > 0 ? (
                            <div className='reviews_list'>
                                {product.reviews.map((review, index) => (
                                    <div key={index} className='review_item'>
                                        <div className='review_header'>
                                            <h5>{review.name}</h5>
                                            <StarRating rating={review.rating}/>
                                        </div>
                                        <p className='review_text'>{review.text}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No reviews yet. Be the first to write one!</p>
                        )}
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