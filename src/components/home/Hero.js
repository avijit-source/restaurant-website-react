import React, { useEffect } from 'react'
import {AiOutlineShop} from 'react-icons/ai';
import {MdFoodBank} from 'react-icons/md';
import { Link } from 'react-router-dom';
import image from '../../assets/foodhome.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init({ duration:1000 })
}, [])
    return (
     <section className="hero">
     <div className="container">
     <div className="row">
     <div className="col-1" data-aos="zoom-out-up">
       <h2>BEST FOOD <br /> Affordable Prices</h2>
       <p>Book your table now</p>
     <div className="button-div">
    <Link to="/book"><button className="hero-button"><span className="hero-button-text">Book</span> <AiOutlineShop  className="button-icon" /></button></Link>
    <Link to="/menu"><button className="hero-button"><span className="hero-button-text">Menu</span> <MdFoodBank className="button-icon" /></button></Link>
    </div>
  </div>
  <div className="col-2">
    <img src={image} alt="food-image" data-aos="flip-right" className="food-image-main" />
    <div className="color-box"></div>
  </div>
  </div>
 </div>
  </section>
    )
}

export default Hero
