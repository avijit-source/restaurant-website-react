import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const animationArr = 
["fade-right","fade-down-right","flip-down",
"flip-right","slide-left","zoom-in-right","zoom-in-up","zoom-out-up","fade-left","zoom-in-left","flip-up","zoom-in-up"] 

const MenuCard = ({ items }) => {
  useEffect(() => {
    AOS.init({ duration:1000 })
   }, [])

  let handleCardAni = () =>{
    return animationArr[Math.floor((Math.random()* 11)+1)]
  }
  

  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, FoodName, type, price ,description } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <div className='item-info' data-aos={handleCardAni()}>
              <header>
                <h4>{FoodName}</h4>
                <h4 className='price'>₹{price}</h4>
                <h4>{type}</h4>
              </header>
              <p className='item-text'>{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuCard;
