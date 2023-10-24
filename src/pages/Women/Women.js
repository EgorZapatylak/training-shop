import React from 'react';
import './Women.css';
import {Link} from "react-router-dom";

export default function Women() {
    return (
        <section>
            <div className='women_header'>
                <div className='road'>
                    <p>Home</p>
                    <div className='ul'/>
                    <span>Women</span>
                </div>
                <div className='share'>
                    <div className='share_img'/>
                    <p>Share</p>
                </div>
            </div>
            <div className='title'>
                <h1>Women</h1>
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
                        <div className='id_1'></div>
                        <p>Women's tracksuit Q109</p>
                        <div className='cost-rate'>
                            <p>$30.00</p>
                            <div className='stars'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                    <div className='clothes'>
                        <div className='id_2'></div>
                        <p>Women's tracksuit Q109</p>
                        <div className='cost-rate'>
                            <p>$30.00</p>
                            <div className='stars'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                    <div className='clothes'>
                        <div className='id_3'></div>
                        <p>Women's tracksuit Q109</p>
                        <div className='cost-rate'>
                            <p>$30.00</p>
                            <div className='stars'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                    <div className='clothes'>
                        <div className='id_4'></div>
                        <p>Women's tracksuit Q109</p>
                        <div className='cost-rate'>
                            <p>$30.00</p>
                            <div className='stars'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                    <div className='clothes'>
                        <div className='id_5'></div>
                        <p>Women's tracksuit Q109</p>
                        <div className='cost-rate'>
                            <p>$30.00</p>
                            <div className='stars'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                    <div className='clothes'>
                        <div className='id_6'></div>
                        <p>Women's tracksuit Q109</p>
                        <div className='cost-rate'>
                            <p>$30.00</p>
                            <div className='stars'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                    <div className='clothes'>
                        <div className='id_7'></div>
                        <p>Women's tracksuit Q109</p>
                        <div className='cost-rate'>
                            <p>$30.00</p>
                            <div className='stars'></div>
                        </div>
                    </div>
                </Link>
                <Link to="/product">
                    <div className='clothes'>
                        <div className='id_8'></div>
                        <p>Women's tracksuit Q109</p>
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

