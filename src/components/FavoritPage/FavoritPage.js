import { useContext } from "react";
import { FavoritesContext } from "./FavotirContext";
import styles from "./FavoritesTab.module.css";

export const FavoritesTab = () => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    return (
        <div className={styles.favorites}>
            <h2>Избранное</h2>
            {favorites.length === 0 ? (
                <p>Нет избранных товаров.</p>
            ) : (
                <div className={styles.favoritesGrid}>
                    {favorites.map((product) => (
                        <div key={product.id} className={styles.productCard}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price} руб.</p>
                            <button onClick={() => toggleFavorite(product)}>
                                Удалить из избранного
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};