import React, {useState} from 'react';
import styles from './UserDashboard.module.css'


    // Заглушки для секций
    const Profile = () => <div>Информация о профиле</div>;
    const Favorites = () => <div>Список избранных товаров</div>;
    const Orders = () => <div>История заказов</div>;
    const Settings = () => <div>Настройки аккаунта</div>;

    export   const UserDashboard = () => {
        const [activeTab, setActiveTab] = useState("profile");

        const renderTabContent = () => {
            switch (activeTab) {
                case "profile":
                    return <Profile />;
                case "favorites":
                    return <Favorites />;
                case "orders":
                    return <Orders />;
                case "settings":
                    return <Settings />;
                default:
                    return <div>Выберите вкладку</div>;
            }
        };

        return (
            <div>
                <div className={styles.user_dashboard}>
                    <nav className={styles.dashboard_nav}>
                        <ul>
                            <li>
                                <button
                                    className={activeTab === "profile" ? styles.active : ""}
                                    onClick={() => setActiveTab("profile")}
                                >
                                    Профиль
                                </button>
                            </li>
                            <li>
                                <button
                                    className={activeTab === "favorites" ? styles.active : ""}
                                    onClick={() => setActiveTab("favorites")}
                                >
                                    Избранное
                                </button>
                            </li>
                            <li>
                                <button
                                    className={activeTab === "orders" ? styles.active : ""}
                                    onClick={() => setActiveTab("orders")}
                                >
                                    Заказы
                                </button>
                            </li>
                            <li>
                                <button
                                    className={activeTab === "settings" ? styles.active : ""}
                                    onClick={() => setActiveTab("settings")}
                                >
                                    Настройки
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.dashboard_content}>
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        );
    };
