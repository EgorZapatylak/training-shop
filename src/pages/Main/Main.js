import React from 'react';
import './Main.css';
import {Hero} from "../../components/Hero/Hero";
import {Advantage} from "../../components/Advantage/Advantage";
import {Promise} from "../../components/Promise/Promise";
import {SpecialOffer} from "../../components/SpecialOffer/SpecialOffer";
import {Blog} from "../../components/Blog/Blog";
import {Products} from "../../components/Products/Products";
import {Products_base} from "../../Products_base";

export const MAIN_CLOTHES_BLOCK_MENU =[
    {
        particularName: "isNewArrivals",
        name: "NEW ARRIVALS"
    },
    {
        particularName: "isSpecial",
        name: "SPECIALS"
    },
    {
        particularName: "isBestseller",
        name: "BESTSELLERS"
    },
    {
        particularName: "isMostViewed",
        name: "MOST VIEWED"
    },
    {
        particularName: "isFeatured",
        name: "FEATURED PRODUCTS"
    }
]

export default function Main() {

    return (
        <section className='main'>
            <Hero/>
            <Advantage/>
            <Products title="Women's" item={Products_base.women} partic={MAIN_CLOTHES_BLOCK_MENU}/>
            <Products title="Men's" item={Products_base.men} partic={MAIN_CLOTHES_BLOCK_MENU}/>
            <Promise/>
            <SpecialOffer/>
            <Blog/>
        </section>
    )
}

