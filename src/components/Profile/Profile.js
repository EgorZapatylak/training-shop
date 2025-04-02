import React, {useState} from 'react';
import style from './Profile.module.css'

export const Profile = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        avatar: 'https://via.placeholder.com/100',
        name: 'Ivan Ivanov',
        email: 'ivanov@example.com',
    });

    const handleChange = (e) => {
        setUserData({...userData,[e.target.name]: e.target.value})
    };

    return (
        <div className={style.profile}>
            <img src={userData} alt="Avatar" className={style.avatar}/>
            {isEditing ? (
                <input
                    type="text"
                    name='name'
                    value={userData.name}
                    onChange={handleChange}
                    className={style.input}
                />
            ) : (
                <h2>{userData.name}</h2>
            )}
            <p>{userData.email}</p>
            <button
                className={style.editButton}
                onClick={() => setIsEditing(!isEditing)}
            >
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </div>
    );
};
