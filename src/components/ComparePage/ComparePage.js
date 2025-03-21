import {useCompare} from "../../context/CompareContext";
import React from "react";
import { Link } from "react-router-dom";
import style from './ComparePage.module.css'

export default function ComparePage() {
    const { compareItems, removeFromCompare } = useCompare();


    if (!compareItems || compareItems.length === 0) {
        return (
            <div className={style.compare_container}>
                <h2>Список сравнения пуст</h2>
                <Link to="/">Вернуться к товарам</Link>
            </div>
        );
    }

    // Оставляем только нужные поля
    const fieldToShow = ['imageURL','brand','material', 'price', 'sizes', 'reviews', 'images'];

    //Определяем, какие поля отличаются

    const differentKeys = fieldToShow.filter((key)=> {
        const uniqueValues = new Set(compareItems.map((product)=> JSON.stringify(product[key])));
        return uniqueValues.size > 1; // Если есть разные значения - это отличие
    });

    return (
        <div className={style.compare_container}>
            <h2>Сравнение товаров</h2>
            <table className={style.compare_table} border="1">
                <thead>
                <tr>
                    <th>Название</th>
                    {compareItems.map((product) => (
                        <th key={product.name}>
                            {product.name}
                            <button  className={style.remove_btn} onClick={() => removeFromCompare(product.id)}>×</button>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {fieldToShow.map((key) => (
                    <tr key={key} className={differentKeys.includes(key) ? `${style.compare_highlight}`:`${style}`}>
                        <td>{getFieldLabel(key)}</td>
                        {compareItems.map((product) => (
                            <td key={product.name}>
                                {renderFieldValue(key, product[key])}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

//Функция для замены названий полей на читабельные
function getFieldLabel(key) {
    const labels = {
        imageURL: "Фото",
        brand:"Брэнд",
        material:"Материал",
        price:"Цена",
        sizes:"Размеры",
        reviews:"Отзывы",
        images:"Доступные цвета",
    };
    return labels[key] || key;
}

// Функция для рендеринга значений
function renderFieldValue(key, value) {
    if (key === 'imageURL') {
        return <img src={value} alt="Товар" className={style.compare_image}/>;
    }
    if (key === 'sizes') {
        return value.join(', ');
    }
    if (key === 'reviews') {
        return `${value.length} отзыв(-ов), ${calculateAverageRating(value)} ⭐`;
    }
    if (key === 'images') {
        return value.map((img, index)=>(
            <span key={index} className={style.color_dot} style={{backgroundColor: img.color}}></span>
        ));
    }
    return value || '-'
}

// Функция для вычисления среднего рейтинга
function calculateAverageRating(reviews) {
    if (!reviews || reviews.length === 0) return 'Нет оценок';
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
}