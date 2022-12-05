import React from 'react';
import './Blog.css'

export function Blog () {
    return (
        <>
            <div className='blog_header'>
                <h2>LATEST FROM BLOG</h2>
                <p>SEE ALL</p>
            </div>
            <div className='blog_post'>
                <div className='box_1'>
                    <div className='box_info'>
                        <h3>The Easiest Way to Break</h3>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas <br/> and praising
                            pain was bor</p>
                        <div className='data'>
                            <p>April 6, 2022<span>Read More</span></p>
                        </div>
                    </div>
                </div>
                <div className='box_2'>
                    <div className='box_info'>
                        <h3>Wedding Season</h3>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas <br/> and praising
                            pain was bor</p>
                        <div className='data'>
                            <p>April 6, 2022<span>Read More</span></p>
                        </div>
                    </div>
                </div>
                <div className='box_3'>
                    <div className='box_info'>
                        <h3>Recent Favorites On Repeat</h3>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas <br/> and praising
                            pain was bor</p>
                        <div className='data'>
                            <p>April 6, 2022<span>Read More</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}