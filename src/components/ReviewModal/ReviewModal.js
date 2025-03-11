import React, {useState} from 'react';
import style from './ReviewModal.module.css'

const StarRatingInput = ({rating, setRating}) => {
    return(
        <div className={style.star_rating}>
            {[1,2,3,4,5].map((star) => (
                <span
                key={star}
                className={star <= rating ? `${style.star_selected}`: `${style.star}`}
                onClick={()=> setRating(star)}
                >
                    ⭐
                </span>
            ))}
        </div>
    );
};

export const ReviewModal = ({onClose, onSubmit}) => {

    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        if (!name.trim() || !text.trim()) return;

        const newReview = {
            name,
            text,
            rating,
            id: Date.now().toString(),
        };

        onSubmit(newReview);
        setName('');
        setText('');
        setRating(5);
    };

    return (
        <div className={style.modal}>
            <h2>Написать отзыв</h2>
            <input
                type="text"
                placeholder='Выше имя'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <textarea placeholder='Your review' value={text} onChange={(e)=>setText(e.target.value)}/>
            <StarRatingInput rating={rating} setRating={setRating}/>
            <button onClick={handleSubmit}>Send</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

