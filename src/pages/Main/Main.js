import React from 'react';
import './Main.css';
// import {Swiper} from 'swiper/react'
import {Link} from "react-router-dom";
import {Hero} from "../../components/Hero/Hero";
import {Advantage} from "../../components/Advantage/Advantage";
import {Promice} from "../../components/Promice/Promice";
import {SpecialOffer} from "../../components/SpecialOffer/SpecialOffer";
import {Blog} from "../../components/Blog/Blog";
import {Products} from "../../components/Products/Products";

function main() {
    return (
        <section className='main'>
            <Hero/>
            <Advantage/>
            <div className='line'></div> {/*need sink about it =)*/}
            <Products title="Women's" item={women}/>
            <Products title="Men's" item={men}/>
            <Promice />
            <SpecialOffer />
            <Blog />
        </section>
    )
}

export default main;