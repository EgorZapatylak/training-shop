import React from 'react';
import './Men.css';
import {Link} from "react-router-dom";

function men() {
    return (
        <section>
            <div className='men_header'>
                <div className='road'>
                    <p>Home</p>
                    <div className='ul'/>
                    <span>Men</span>
                </div>
                <div className='share'>
                    <div className='share_img'/>
                    <p>Share</p>
                </div>
            </div>
            <div className='title'>
                <h1>Men</h1>
            </div>
            <div className='edit'>
                <div className='filter'>
                    <div className='filter_img'/>
                    <p>Filter</p>
                </div>
                <div className='veia'>
                    <div className='tabl'/>
                    <div className='plit'/>
                </div>
                <div className='categor'>
                    <p>BESTSELLERS</p>
                    <div className='vector'/>
                </div>
            </div>
            <div className='items'>
                <Link to="/product">
                    <div className='clothes'>
                        <div className='mid_1'></div>
                        <p>Men's tracksuit Q109</p>
                        <div className='cost-rate'>
                            <p>$30.00</p>
                            <div className='stars'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='mid_2'></div>
                    <p>Men's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='mid_3'></div>
                    <p>Men's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='mid_4'></div>
                    <p>Men's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='mid_5'></div>
                    <p>Men's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='mid_6'></div>
                    <p>Men's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='mid_7'></div>
                    <p>Men's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
                <Link to="/product">
                <div className='clothes'>
                    <div className='mid_8'></div>
                    <p>Men's tracksuit Q109</p>
                    <div className='cost-rate'>
                        <p>$30.00</p>
                        <div className='stars'></div>
                    </div>
                </div>
                </Link>
            </div>
            <div className='loading'>
            </div>
        </section>
    )
}

export default men;