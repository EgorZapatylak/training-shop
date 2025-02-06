import React, { useState } from 'react';
import './Men.css';
import { Link } from "react-router-dom";
import { Products_base } from "../../Products_base";

export default function Men() {
    const [filters, setFilters] = useState({
        color: [],
        size: [],
        price: [],
        brand: []
    });

    const [showFilter, setShowFilter] = useState(false);
    const [viewMode, setViewMode] = useState("grid"); // По умолчанию плитки
    const [visibleCount, setVisibleCount] = useState(8); // Количество отображаемых товаров

    const products = Products_base.men;

    // Доступные фильтры
    const availableSizes = [...new Set(products.flatMap(prod => prod.sizes))];
    const availableBrands = [...new Set(products.map(prod => prod.brand))];
    const availableColors = [...new Set(products.flatMap(prod => prod.images.map(img =>img.color)))];

    // Диапазоны цен
    const priceRanges = [
        { min: 0, max: 50, label: "$0 - $50" },
        { min: 50, max: 100, label: "$50 - $100" },
        { min: 100, max: 150, label: "$100 - $150" },
        { min: 150, max: 200, label: "$150 - $200" },
        { min: 200, max: 300, label: "$200 - $300" },
        { min: 300, max: 500, label: "$300 - $500" }
    ];

    // Фильтрация товаров
    const filteredItems = products.filter(prod =>
        (filters.color.length === 0 || filters.images.some(img => filters.color.includes(img.color))) &&
        (filters.size.length === 0 || filters.size.some(size => prod.sizes.includes(size))) &&
        (filters.brand.length === 0 || filters.brand.includes(prod.brand)) &&
        (filters.price.length === 0 || filters.price.some(range => prod.price >= range.min && prod.price < range.max))
    );

    // Функция подгрузки товаров
    const loadMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    return (
        <section>
            <div className='men_header'>
                <div className='road'>
                    <p>Home</p>
                    <div className='ul'/>
                    <span>Men</span>
                </div>
            </div>
            <div className='title'>
                <h1>Men</h1>
            </div>

            {/* Панель управления */}
            <div className='toolbar'>
                <div className='filter' onClick={() => setShowFilter(true)}>
                    <div className='filter_img'/>
                    <p>Filter</p>
                </div>
                <div className='view-toggle'>
                    <button className={viewMode === "grid" ? "active" : ""} onClick={() => setViewMode("grid")}>
                        &#9638;
                    </button>
                    <button className={viewMode === "list" ? "active" : ""} onClick={() => setViewMode("list")}>
                        &#9776;
                    </button>
                </div>
            </div>

            {/* Всплывающее окно фильтрации */}
            {showFilter && (
                <div className='filter-modal'>
                    <div className='filter-content'>
                        <span className='close' onClick={() => setShowFilter(false)}>&times;</span>
                        <h2>Фильтр</h2>

                        {/* Фильтр по цвету */}
                        <label>Color:</label>
                        {availableColors.map(color => (
                            <label key={color}>
                                <input
                                    type="checkbox"
                                    checked={filters.color.includes(color)}
                                    onChange={() => setFilters(prev => ({
                                        ...prev,
                                        color: prev.color.includes(color)
                                            ? prev.color.filter(s => s !== color)
                                            : [...prev.color, color]
                                    }))}
                                />
                                {color}
                            </label>
                        ))}

                        {/* Фильтр по размеру */}
                        <label>Размер:</label>
                        {availableSizes.map(size => (
                            <label key={size}>
                                <input
                                    type="checkbox"
                                    checked={filters.size.includes(size)}
                                    onChange={() => setFilters(prev => ({
                                        ...prev,
                                        size: prev.size.includes(size)
                                            ? prev.size.filter(s => s !== size)
                                            : [...prev.size, size]
                                    }))}
                                />
                                {size}
                            </label>
                        ))}

                        {/* Фильтр по бренду */}
                        <label>Бренд:</label>
                        {availableBrands.map(brand => (
                            <label key={brand}>
                                <input
                                    type="checkbox"
                                    checked={filters.brand.includes(brand)}
                                    onChange={() => setFilters(prev => ({
                                        ...prev,
                                        brand: prev.brand.includes(brand)
                                            ? prev.brand.filter(b => b !== brand)
                                            : [...prev.brand, brand]
                                    }))}
                                />
                                {brand}
                            </label>
                        ))}

                        {/* Фильтр по цене (чекбоксы) */}
                        <label>Цена:</label>
                        {priceRanges.map(range => (
                            <label key={range.label}>
                                <input
                                    type="checkbox"
                                    checked={filters.price.some(p => p.min === range.min && p.max === range.max)}
                                    onChange={() => setFilters(prev => ({
                                        ...prev,
                                        price: prev.price.some(p => p.min === range.min && p.max === range.max)
                                            ? prev.price.filter(p => p.min !== range.min || p.max !== range.max)
                                            : [...prev.price, range]
                                    }))}
                                />
                                {range.label}
                            </label>
                        ))}

                        <button onClick={() => setShowFilter(false)}>Применить</button>
                    </div>
                </div>
            )}

            {/* Вывод товаров */}
            <div className={viewMode === "grid" ? "items grid" : "items list"}>
                {filteredItems.slice(0, visibleCount).map(prod => (
                    <div key={prod.id} className='clothes'>
                        <Link to='/product'>
                            <div className={`mid_${prod.id}`}>
                                <img className='mid' src={prod.imageURL} alt=""/>
                            </div>
                            <p>{prod.name}</p>
                            <p className="brand">{prod.brand}</p>
                            <div className='cost-rate'>
                                <p>${prod.price}</p>
                                <div className='stars'>{prod.rating}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Кнопка "Показать еще" */}
            {visibleCount < filteredItems.length && (
                <div className="load-more">
                    <button onClick={loadMore}>Показать еще</button>
                </div>
            )}
        </section>
    );
}