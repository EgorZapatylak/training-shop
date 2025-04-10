import React from 'react';
import './Main.css';
import {Hero} from "../../components/Hero/Hero";
import {Advantage} from "../../components/Advantage/Advantage";
import {Promise} from "../../components/Promise/Promise";
import {SpecialOffer} from "../../components/SpecialOffer/SpecialOffer";
import {BlogSection} from "../../components/BlogSection/BlogSection";
import {Products} from "../../components/Products/Products";
import {Products_base} from "../../Products_base";


export default function Main() {

    return (
        <section className='main'>
            <Hero/>
            <Advantage/>
            <Products title="Women's" item={Products_base.women}/>
            <Products title="Men's" item={Products_base.men}/>
            <Promise/>
            <SpecialOffer/>
            <BlogSection/>
        </section>
    )
}

