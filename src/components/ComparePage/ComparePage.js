import {useCompare} from "../context/CompareContext";
import React from "react";
import { Link } from "react-router-dom";

export default function ComparePage() {
    const { compareItems, removeFromCompare } = useCompare();
    

    if (!compareItems || compareItems.length === 0) {
        return (
            <div>
                <h2>Список сравнения пуст</h2>
                <Link to="/">Вернуться к товарам</Link>
            </div>
        );
    }

// Находим отличающиеся параметры
    const allKeys = new Set(compareItems.flatMap((product) => Object.keys(product)));
    const differentKeys = [...allKeys].filter((key) =>
        compareItems.some((product, _, arr) => product[key] !== arr[0][key])
    );

    return (
        <div>
            <h2>Сравнение товаров</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>Название</th>
                    {compareItems.map((product) => (
                        <th key={product.id}>
                            {product.name}
                            <button onClick={() => removeFromCompare(product.id)}>×</button>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {differentKeys.map((key) => (
                    <tr key={key}>
                        <td>{key}</td>
                        {compareItems.map((product) => (
                            <td key={product.id} style={{ background: "yellow" }}>
                                {typeof product[key] === 'object'
                                ? JSON.stringify(product[key])
                                : product[key] || '-'}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to="/">Вернуться к товарам</Link>
        </div>
    );
}
