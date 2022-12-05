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

    const men = [
    { id:1, name: "Men's tracksuit Q101", price: "30.00", imageURL: require("../../pages/Men/img/men_1.jpg")},
    { id:2, name: "Men's tracksuit Q101", price: "30.00", imageURL: require("../../pages/Men/img/men_2.jpg")},
    { id:3, name: "Men's tracksuit Q101", price: "30.00", imageURL: require("../../pages/Men/img/men_3.jpg")},
    { id:4, name: "Men's tracksuit Q101", price: "30.00", imageURL: require("../../pages/Men/img/men_4.jpg")},
    { id:5, name: "Men's tracksuit Q101", price: "30.00", imageURL: require("../../pages/Men/img/men_5.jpg")},
    { id:6, name: "Men's tracksuit Q101", price: "30.00", imageURL: require("../../pages/Men/img/men_6.jpg")},
    { id:7, name: "Men's tracksuit Q101", price: "30.00", imageURL: require("../../pages/Men/img/men_7.jpg")},
    { id:8, name: "Men's tracksuit Q101", price: "30.00", imageURL: require("../../pages/Men/img/men_8.jpg")},
]
    const women = [
        { id:1, name: "Women's tracksuit Q109", price: "30.00", imageURL: require("../../pages/Women/img/women_1.jpg")},
        { id:2, name: "Women's tracksuit Q109", price: "30.00", imageURL: require("../../pages/Women/img/women_2.jpg")},
        { id:3, name: "Women's tracksuit Q109", price: "30.00", imageURL: require("../../pages/Women/img/women_3.jpg")},
        { id:4, name: "Women's tracksuit Q109", price: "30.00", imageURL: require("../../pages/Women/img/women_4.jpg")},
        { id:5, name: "Women's tracksuit Q109", price: "30.00", imageURL: require("../../pages/Women/img/women_5.jpg")},
        { id:6, name: "Women's tracksuit Q109", price: "30.00", imageURL: require("../../pages/Women/img/women_6.jpg")},
        { id:7, name: "Women's tracksuit Q109", price: "30.00", imageURL: require("../../pages/Women/img/women_7.jpg")},
        { id:8, name: "Women's tracksuit Q109", price: "30.00", imageURL: require("../../pages/Women/img/women_8.jpg")},
    ]
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