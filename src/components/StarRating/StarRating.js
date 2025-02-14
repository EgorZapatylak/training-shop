import React from 'react';

export function StarRating({rating}) {

    const totalStars = 5; // Общее количество звезд
    const filledStars = Math.round(rating); // Заполненные звезды (округляем)

    return (
        <div className='star_rating'>
            {[...Array(totalStars)].map((_, index) => (
                <span
                    key={index}
                    className={index < filledStars ? 'star filled' : 'star'}>
                    ⭐  </span>
            ))}
        </div>
    );
}