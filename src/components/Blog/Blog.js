import React from 'react';
import style from './Blog.module.css'

export const Blog = () => {
    return (
        <div className={style.blog_container}>
            <h2>Последние новости</h2>
            <div className={style.container_item}>
                <img src="../BlogSection/img/blog_1.jpg" alt=""/>
                <div className={style.container_info}>
                    <h3>The Easiest Way to Break</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis enim illum natus provident? Dicta esse et exercitationem laudantium, odio quos reiciendis. Aperiam atque commodi cumque delectus deserunt distinctio ex facere, impedit itaque libero minima natus nemo, nesciunt officiis placeat tempora veniam vitae voluptas voluptatem voluptatum. A ab ad animi aperiam asperiores assumenda at deleniti dicta dolor doloremque ea earum eligendi eveniet ex exercitationem fugiat hic iusto, labore magni maxime nam nihil pariatur porro quae, quas qui quos recusandae sapiente soluta tenetur unde velit veritatis voluptas. Aliquid aperiam ipsa quisquam saepe voluptatibus. Delectus iure molestias quia veritatis. Et, possimus soluta!</p>
                </div>
            </div>
            <div className={style.container_item}>
                <img src="../BlogSection/img/blog_2.jpg" alt=""/>
                <div className={style.container_info}>
                    <h3>The Easiest Way to Break</h3>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising
                        pain was bor</p>
                </div>
            </div>
            <div className={style.container_item}>
                <img src="../BlogSection/img/blog_3.jpg" alt=""/>
                <div className={style.container_info}>
                    <h3>The Easiest Way to Break</h3>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising
                        pain was bor</p>
                </div>
            </div>
        </div>
    );
};