import { useContext } from "react";
import { FavoritesContext } from "./FavotirContext";
import styles from "./FavoritesTab.module.css";
import { useNavigate } from "react-router-dom";

export const FavoritesTab = () => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
    const navigate = useNavigate();

    return (
        <div className={styles.favorites}>
            <h2>Избранное</h2>
            {favorites.length === 0 ? (
                <p>Нет избранных товаров.</p>
            ) : (
                <div className={styles.favoritesGrid}>
                    {favorites.map((product) => (
                        <div
                            key={product.id}
                            className={styles.productCard}
                            onClick={() => navigate(`/${category}/${product.id}`)}
                        >
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price} руб.</p>
                            <button
                                className={styles.removeButton}
                                onClick={(e) => {
                                    e.stopPropagation(); // Предотвращает переход при нажатии на кнопку
                                    toggleFavorite(product);
                                }}
                            >
                                Удалить из избранного
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
