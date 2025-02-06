import React, {useEffect, useState} from 'react';
import './Men.css';
import {Link} from "react-router-dom";
import {Products_base} from "../../Products_base";

export default function Men(props) {

    const defaultParams = {
        limit:8,
        offset:0
    }

    const [items, setItems] = useState([]);
    const [params, setParams] = useState(defaultParams)

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
                {Products_base.men.map((prod) => (
                    <>
                        <div  className='clothes'>
                            <Link to='/product'>
                                <div className={`mid_${prod.id}`}>
                                    <img className='mid' src={prod.imageURL} alt=""/>
                                </div>
                                <p>{prod.name}</p>
                                <div className='cost-rate'>
                                    <p>${prod.price}.00</p>
                                    <div className='stars'>{prod.rating}</div>
                                </div>
                            </Link>
                        </div>
                    </>
                ))}
            </div>
            <div className='loading' onClick={()=> setParams({...params, offset: params.offset + params.limit})}>
            </div>
        </section>
    )
}
