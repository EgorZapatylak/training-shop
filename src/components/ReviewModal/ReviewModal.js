import React, {useEffect, useState} from 'react';
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
    const [error, setError] = useState({name:'', text:''});
    const [isSubmitting, setIsSubmitting] =useState(false);
    const [rating, setRating] = useState(0);

    useEffect(()=>{
        // Блокируем scroll при открытом модальном окне
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto'; // Разблокируем при открытом
        };
    }, []);

    const validateForm = () => {
        const newError = {
            name: name.trim() ? '' : 'Enter name',
            text: text.trim() ? '' : 'Enter text',
        };
        setError(newError);
        return !newError.name && !newError.text;
    }

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const newReview = {
                name,
                text,
                rating,
                id: Date.now().toString(),
            };
            onSubmit(newReview);
            onClose();
        } catch (error) {
            alert('Warning from send');
        } finally {
            setIsSubmitting(false)
        }
    };

    return (
        <div className={style.modal_overlay}>
            <div className={style.maodal}>
                <h2>Написать отзыв</h2>
                <input
                    type="text"
                    placeholder='Выше имя'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                {error.name && <p className={style.error}>{error.name}</p>}

                <textarea
                    placeholder='Your review'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                />
                {error.text && <p className={style.error}>{error.text}</p>}

                <StarRatingInput rating={rating} setRating={setRating}/>

                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                >{isSubmitting ? 'Sending...' :'Send'}
                </button>
                <button
                    onClick={onClose}
                    disabled={isSubmitting}>
                    Close
                </button>
            </div>
        </div>
    );
};

