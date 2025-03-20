import { useCompare } from "../context/CompareContext";
import React from "react";
import { Link } from "react-router-dom";

export default function ComparePage() {
    const { compareList, removeFromCompare } = useCompare();

    if (compareList.length === 0) {
        return (
            <div>
                <h2>Список сравнения пуст</h2>
                <Link to="/">Вернуться к товарам</Link>
            </div>
        );
    }

// Находим отличающиеся параметры
    const allKeys = new Set(compareList.flatMap((product) => Object.keys(product)));
    const differentKeys = [...allKeys].filter((key) =>
        compareList.some((product, _, arr) => product[key] !== arr[0][key])
    );

    return (
        <div>
            <h2>Сравнение товаров</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>Название</th>
                    {compareList.map((product) => (
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
                        {compareList.map((product) => (
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
