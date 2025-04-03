import React, {useState} from 'react';
import styles from './UserDashboard.module.css'
import {Profile} from "../Profile/Profile";
import {FavoritesTab} from "../FavoritPage/FavoritPage"
import {OrderTab} from "../OrderTab/OrderTab"


    // Заглушки для секций
    const Settings = () => <div>Настройки аккаунта</div>;

    export   const UserDashboard = () => {
        const [activeTab, setActiveTab] = useState("profile");

        const renderTabContent = () => {
            switch (activeTab) {
                case "profile":
                    return <Profile />;
                case "favorites":
                    return <FavoritesTab />;
                case "orders":
                    return <OrderTab />;
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
