import React from 'react';
import style from './Blog.module.css'

export const Blog = () => {
    return (
        <div className={style.blog_container}>
            <h2>Последние новости</h2>
            <div className={style.container_item}>
                <h3>The Easiest Way to Break</h3>
                <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising
                    pain was bor</p>
            </div>
            <div className={style.container_item}>
                <h3>The Easiest Way to Break</h3>
                <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising
                    pain was bor</p>
            </div>
            <div className={style.container_item}>
                <h3>The Easiest Way to Break</h3>
                <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising
                    pain was bor</p>
            </div>
        </div>
    );
};