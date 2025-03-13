import React from 'react';
import style from './Blog.module.css'

export const Blog = () => {
    return (
        <div>
            <h2>Последние новости</h2>
            <div  style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                <h3>The Easiest Way to Break</h3>
                <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising
                    pain was bor</p>
                <div className='data'>
                    <p>April 6, 2022<span>Read More</span></p>
                </div>
            </div>
            <div  style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                <h3>The Easiest Way to Break</h3>
                <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising
                    pain was bor</p>
                <div className='data'>
                    <p>April 6, 2022<span>Read More</span></p>
                </div>
            </div>
            <div  style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                <h3>The Easiest Way to Break</h3>
                <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising
                    pain was bor</p>
                <div className='data'>
                    <p>April 6, 2022<span>Read More</span></p>
                </div>
            </div>
        </div>
    );
};