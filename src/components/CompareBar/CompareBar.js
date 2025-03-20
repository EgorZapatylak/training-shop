import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CompareContext } from "../../context/CompareContext";
import "./CompareBar.css";

const CompareBar = () => {
    const { compareItems, clearCompare } = useContext(CompareContext);

    if (compareItems.length === 0) return null; // Скрываем, если нет товаров

    return (
        <div className="compare-bar">
            <Link to="/compare" className="compare-link">
                {compareItems.length} товара в сравнении
            </Link>
            <button className="compare-clear" onClick={clearCompare}>🗑</button>
        </div>
    );
};

export default CompareBar;