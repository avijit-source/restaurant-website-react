import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const cardAnimationArr = ["fade-up","flip-left","slide-up"];


function Card(props) {
  let handleAnimation =()=>{
     return cardAnimationArr[props.idx]
  }
  useEffect(() => {
    AOS.init({ duration:1000 })
}, [])
    return (
     <div className="card" data-aos={handleAnimation()}>
         <img src={props.pic} alt="Jane" style={{width: '100%' ,height:400}} className="card__img" />
        <div className="card__body">
        <h2 className="card__title">{props.name}</h2>
        <p className="card__description">Senior Chef</p>
        
    </div>
  </div>
    )
}

export default Card
