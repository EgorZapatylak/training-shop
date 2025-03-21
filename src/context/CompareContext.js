import React, {createContext, useContext, useState} from "react";

export const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
    const [compareItems, setCompareList] = useState([]);

    const addToCompare = (product) => {
        setCompareList((prev) => {
            if (prev.find((item) => item.id === product.id)) return prev; // Не дублируем товары
            return [...prev, product];
        });
    };

    const removeFromCompare = (id) => {
        setCompareList((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCompare = () => {
        setCompareList([]);
    }

    return (
        <CompareContext.Provider value={{ compareItems, addToCompare, removeFromCompare, clearCompare}}>
            {children}
        </CompareContext.Provider>
    );
};

export const useCompare = () => useContext(CompareContext);