import React, {useState, useEffect} from 'react';
import './Men.css';
import {Link} from "react-router-dom";
import {Products_base} from "../../Products_base";

export default function Men() {
    const [filters, setFilters] = useState({
        size: [],
        price: [],
        brand: [],
        color: []
    });

    const [showFilter, setShowFilter] = useState(false);
    const [viewMode, setViewMode] = useState("grid"); // По умолчанию плитки
    const [visibleCount, setVisibleCount] = useState(8); // Количество отображаемых товаров
    const [filteredItems, setFilteredItems] = useState([]); // Отфильтрованные товары
    const [selectedColor, setSelectedColor] = useState(null)

    const products = Products_base.men;

    // Доступные фильтры
    const availableSizes = [...new Set(products.flatMap(prod => prod.sizes))];
    const availableBrands = [...new Set(products.map(prod => prod.brand))];

    // Извлекаем все уникальные цвета из всех товаров
    const availableColors = [
        ...new Set(
            products.flatMap(prod => prod.images ? prod.images.map(img => img.color) : [])
        )
    ];

    // Диапазоны цен
    const priceRanges = [
        {min: 0, max: 50, label: "$0 - $50"},
        {min: 50, max: 100, label: "$50 - $100"},
        {min: 100, max: 150, label: "$100 - $150"},
        {min: 150, max: 200, label: "$150 - $200"},
        {min: 200, max: 300, label: "$200 - $300"},
        {min: 300, max: 500, label: "$300 - $500"}
    ];

    // Фильтрация товаров
    useEffect(() => {
        const filtered = products.filter(prod =>
            (filters.size.length === 0 || filters.size.some(size => prod.sizes.includes(size))) &&
            (filters.brand.length === 0 || filters.brand.includes(prod.brand)) &&
            (filters.color.length === 0 || prod.images.some(img => filters.color.includes(img.color))) &&
            (filters.price.length === 0 || filters.price.some(range => prod.price >= range.min && prod.price < range.max))
        );
        setFilteredItems(filtered);
    }, [filters]);

    // Функция подгрузки товаров
    const loadMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    // Функция выбора фильтров (моментальное обновление)
    const handleFilterChange = (type, value) => {
        setFilters(prev => ({
            ...prev,
            [type]: prev[type].includes(value)
                ? prev[type].filter(v => v !== value)
                : [...prev[type], value]
        }));
    };

    // Собираем все цвета из товаров
    const uniqueColors = [
        ...new Set(
            Products_base.men.flatMap(product =>
                product.images.map(image => image.color)
            )
        ),
    ]

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    }

    return (
        <section>
            <div className='men_header'>
                <div className='road'>
                    <p>Home</p>
                    <div className='ul'/>
                    <span>Men</span>
                </div>
                <div className='share'>
                    <div className='share_img'/>
                    <p>Share</p>
                </div>
            </div>
            <div className='title'>
                <h1>Men</h1>
            </div>

            {/* Панель управления */}
            <div className='edit'>
                <div className='filter'>
                    <div className='filter_img' onClick={() => setShowFilter(!showFilter)}/>
                    <p>Filter</p>
                </div>
                <div className='veia'>
                    <div className='tabl' onClick={() => setViewMode("list")}>
                    </div>
                    <div className="plit" onClick={() => setViewMode("grid")}>
                    </div>
                </div>
                <div className='categor'>
                    <p>BESTSELLERS</p>
                    <div className='vector'/>
                </div>
            </div>

            {/* Отображение выбранных фильтров */}
            <div className="selected-filters">
                {Object.entries(filters).flatMap(([key, values]) =>
                    values.map(value => (
                        <span key={value} className="filter-tag">
                            {value.replace('INT', '')}
                            <button onClick={() => handleFilterChange(key, value)}>✕</button>
                        </span>
                    ))
                )}
            </div>
            {/* Всплывающее бургер-меню фильтро*/}
            {showFilter && (
                <div className='filter-modal'>
                    <div className='filter-content'>

                        {/* Фильтр по цвету */}
                        <div className='filter_group'><label>Цвет:</label>
                            {uniqueColors.map(color => (
                                <div
                                    key={color}
                                    className={`color-option ${color.toLowerCase()} ${selectedColor === color ? 'active' : ''}`}
                                    onClick={() => handleColorSelect(color)}>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </div>
                            ))}</div>

                        {/* Фильтр по размеру */}
                        <div className='filter_group'><label>Размер:</label>
                            {availableSizes.map(size => (
                                <label key={size}>
                                    <input
                                        type="checkbox"
                                        checked={filters.size.includes(size)}
                                        onChange={() => handleFilterChange("size", size)}
                                    />
                                    {size.slice(0, -3)}
                                </label>
                            ))}</div>

                        {/* Фильтр по бренду */}
                        <div className='filter_group'><label>Бренд:</label>
                            {availableBrands.map(brand => (
                                <label key={brand}>
                                    <input
                                        type="checkbox"
                                        checked={filters.brand.includes(brand)}
                                        onChange={() => handleFilterChange("brand", brand)}
                                    />
                                    {brand}
                                </label>
                            ))}</div>


                        {/* Фильтр по цене */}
                        <div className='filter_group'><label>Цена:</label>
                            {priceRanges.map(range => (
                                <label key={range.label}>
                                    <input
                                        type="checkbox"
                                        checked={filters.price.some(p => p.min === range.min && p.max === range.max)}
                                        onChange={() => handleFilterChange("price", range)}
                                    />
                                    {range.label}
                                </label>
                            ))}</div>
                    </div>
                </div>
            )}

            {/* Вывод товаров */}
            <div className={viewMode === "grid" ? "items grid" : "items list"}>
                {filteredItems.slice(0, visibleCount).map(prod => (
                    <div key={prod.id} className='clothes'>
                        <Link to={`/product/${prod.id}`}>
                            <div className={`mid_${prod.id}`}>
                                <img className='mid' src={prod.imageURL} alt={prod.name}/>
                            </div>
                            <p>{prod.name}</p>
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
                <div className="load_more" onClick={loadMore}>
                </div>
            )}
        </section>
    );
}