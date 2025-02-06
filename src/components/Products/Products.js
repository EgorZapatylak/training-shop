import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Card from "../../pages/Main/img/gray.svg";
import './Products.css';
import {Products_base} from "../../Products_base";

export function Products(props) {

    let [filter,setFilter] = useState('isNewArrivals')

    let itemForData = Products_base;

    if (filter === 'isSpecials') {
        itemForData = Products_base.filter(i => i.particulars.isSpecial === true)
    }
    if (filter === 'isBestseller') {
        itemForData = Products_base.filter(i => i.particulars.isBestseller === true)
    }
    if (filter === 'isMostViewed') {
        itemForData = Products_base.filter(i => i.particulars.isMostViewed === true)
    }
    if (filter === 'isFeaturedProducts') {
        itemForData = Products_base.filter(i => i.particulars.isFeatured === true)
    }

    function changeFilter(value) {
        setFilter(value)
    }

    return (
        <>
            <div className='line'></div>
            <div className='item_hed'>
                <div className='item_info'>
                    <h2>{props.title}</h2>
                </div>
                <div className='sort'>
                    <h3 onClick={()=>console.log(props.partic[0].particularName)}>{props.partic[0].name}</h3>
                    <h3 onClick={()=>console.log(props.partic[1].particularName)}>{props.partic[1].name}</h3>
                    <h3 onClick={()=>console.log(props.partic[2].particularName)}>{props.partic[2].name}</h3>
                    <h3 onClick={()=>console.log(props.partic[3].particularName)}>{props.partic[3].name}</h3>
                    <h3 onClick={()=>console.log(props.partic[4].particularName)}>{props.partic[4].name}</h3>
                </div>
            </div>
            <div className='items'>
                {props.item.map((el) => (
                    <Link to="/product">
                        <div className='clothes'>
                            <div className='men_id'>
                                <img src={el.imageURL}/>
                            </div>
                            <div className='clothes_info'>
                                <p>{el.name}</p>
                                <div className='cost-rate'>
                                    <p>{el.price}</p>
                                    <div className='stars'></div>
                                </div>
                                <div className='clothes_event'>
                                    <div className="clothes_info_img">
                                        <img width={40} height={40} src={Card} alt='blue'/>
                                        <img width={40} height={40} src={Card} alt='white'/>
                                        <img width={40} height={40} src={Card} alt='black'/>
                                        <img width={40} height={40} src={Card} alt='grey'/>
                                    </div>
                                    <div className='clothes_info_size'>
                                        <div className='xs'>
                                            <p>XS</p>
                                        </div>
                                        <div className='s'>
                                            <p>S</p>
                                        </div>
                                        <div className='m'>
                                            <p>M</p>
                                        </div>
                                        <div className='l'>
                                            <p>L</p>
                                        </div>
                                    </div>
                                    <div className='clothes_info_event'>
                                        <button>ADD TO CART</button>
                                        <div className="heart_1"></div>
                                        <div className="scale_1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>))}
                <Link to={"/" + props.title.toLowerCase().slice(0,-2)}>
                    <button className='women_button'>See All</button>
                </Link>
            </div>
        </>
    );
}