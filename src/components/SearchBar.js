import {useEffect, useRef, useState} from "react";
import {Products_base} from '../Products_base'
import styles from './SearchBar.module.css'
import {useNavigate} from "react-router-dom";


export const SearchBar = ({closeSearch}) => {

    const [query, setQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const searchRef = useRef(null);
    const navigate = useNavigate(); // Создаем хук навигации

    // Объединяем товары из всех категорий в один массив
    const allProducts = [...Products_base.men.map((p) => ({...p, category:'men'})),
        ...Products_base.women.map((p) => ({...p, category:'women'}))]

    // Фильтрация товаров при изменении запроса
    useEffect(()=> {
        if (query.trim() === '') {
            setFilteredProducts([])
            return;
        }

        const results = allProducts.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredProducts(results);
        setShowDropdown(true);
    }, [query]);

    //Закрытие списка при клике вне области поиска

    useEffect(()=>{
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)){
                closeSearch();
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeSearch();
            }
        }

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [closeSearch]);
    
    // Функция для перехода на страницу товара
    const handleProductClick = (category, id) => {
        navigate(`/${category}/${id}`); // Переход на страницу товара
        closeSearch(); // Закрываем список после клика
    };

    const handleEnterPress = (event) =>  {
        if (event.key === 'Enter' && query.trim()) {
            navigate(`/search?q=${query}`);
            closeSearch();
        }
    }

    return(
        <div className={styles.search_container} ref={searchRef}>
            <input
                type="text"
                className={styles.search_info}
                placeholder='Поиск товаров'
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                onKeyDown={handleEnterPress}
                autoFocus
            />
            {showDropdown && filteredProducts.length > 0 && (
                <ul className={styles.search_dropdown}>
                    {filteredProducts.map((product) => (
                        <li
                            key={product.id}
                            className={styles.search_item}
                            onClick={()=>handleProductClick(product.category, product.id)} // Обработчик клика
                        >
                            <img src={product.imageURL} alt={product.name} className={styles.search_img}/>
                            <span dangerouslySetInnerHTML={{__html: highlightText(product.name, query)}}></span>
                        </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

// Функция для подсветки текста
const highlightText = (text,query) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<b>$1</b>');
}