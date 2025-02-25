import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Products.css';
import {StarRating} from "../StarRating/StarRating";

export function Products({title, item}) {
    const [filter, setFilter] = useState(null); // По умолчанию без фильтра

    // Получаем товары по заданной категории
    let items = item || [];

    // Фильтрация по particulars
    if (filter) {
        items = items.filter(product => product.particulars[filter]);
    }

    // Получаем список доступных фильтров (динамически)
    const availableFilters = Object.keys(items[0]?.particulars || {});

    return (
        <>
            <div className='line'></div>
            <div className='item_hed'>
                <div className='item_info'>
                    <h2>{title}</h2>
                </div>
                <div className='sort'>
                    <h3 onClick={() => setFilter(null)}
                        className={!filter ? 'active-filter' : ''}>
                        All
                    </h3>
                    {availableFilters.map((key) => (
                        <h3 key={key} onClick={() => setFilter(key)}
                            className={filter === key ? 'active-filter' : ''}>
                            {key.replace(/is/, '')} {/* Убираем "is" для читаемости */}
                        </h3>
                    ))}
                </div>
            </div>
            <div className='items'>
                {items.slice(0, 8).length > 0 ? (
                    items.slice(0, 8).map((el) => (
                        <Link key={el.id} to={`/product/${el.id}`}>
                            <div className='clothes'>
                                <div className='men_id'>
                                    {el.discount && (
                                        <div className='discount_badge'>
                                            {el.discount}
                                        </div>
                                    )}
                                    <img src={el.imageURL ? el.imageURL : el.images[0].url} alt={el.name}/>
                                </div>
                                <div className='clothes_info'>
                                    <p>{el.name}</p>
                                    <p>
                                        <strong>{el.brand}</strong>
                                    </p>
                                    <div className='cost-rate'>
                                        {el.discount ? (
                                            <div className='price_item'>
                                                <p className='new_price'>
                                                    {(el.price * (1 + parseFloat(el.discount) / 100)).toFixed(1)} $
                                                    {/* Учитываем скидку */}
                                                </p>
                                                <p className='old_price'>{el.price} $</p>
                                            </div>
                                        ) : (
                                            <p>{el.price}$</p>
                                        )}
                                        <StarRating rating={el.rating}/>
                                    </div>
                                    <div className='clothes_event'>
                                        <div className="clothes_info_img">
                                            {el.images.slice(0, 4).map((img) => (
                                                <img key={img.id} width={40} height={40} src={el.imageURL ? el.imageURL : el.images[0].url}
                                                     alt={img.color}/>
                                            ))}
                                        </div>
                                        <div className='clothes_info_size'>
                                            {el.sizes.map((size, index) => (
                                                <div key={index} className='size-box'>
                                                    <p>{size.slice(0, -4)}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='clothes_info_event'>
                                            <button>
                                                ADD TO CART
                                            </button>
                                            <div className="heart_1"></div>
                                            <div className="scale_1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No products found</p>
                )}
                <Link to={"/" + title.toLowerCase().slice(0, -2)}>
                    <button className='women_button'>See All</button>
                </Link>
            </div>
        </>
    );
}