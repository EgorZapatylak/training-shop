import React, {useState} from 'react';
import style from './ReviewModal.css'

export const ReviewModalModule = ({onClose, onSubmit}) => {

    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [rating, setRating] = useState(5);

    const handleSubmit = () => {
        if (!name.trim() || !text.trim()) return;

        const newReniew = {
            name,
            text,
            rating,
            id: Date.now().toString(),
        };

        onSubmit(newReniew);
        setName('');
        setText('');
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
            <button onClick={handleSubmit}>Send</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

