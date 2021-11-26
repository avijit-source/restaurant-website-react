import React, { useEffect } from 'react'
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import chef1 from '../../assets/chef1.jpg';
import chef2 from '../../assets/chef2.jpg';
import chef3 from '../../assets/chef3.jpg';
import Card from './Card';
import {SiCodechef} from 'react-icons/si'

const chefData = [
    { id: 0,name: "Chinmay Dara",pic: chef1},
    {id: 1,name: "Deepesh Morar" , pic: chef2},
    { id:2 ,name: "Labeen Sethi", pic: chef3}
]

function About() {
    useEffect(() => {
        AOS.init({ duration:1000 })
    }, [])
    return (
        <section>
            <div className="about-section">
          <h1 style={{marginBottom:10}}>About Us</h1>
          <hr />
          <p style={{marginTop:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis at justo sed tristique. </p>
          <p>Sed consequat, massa id euismod sagittis, mi lectus posuere ex, sit amet luctus mauris tortor eget metus. Maecenas non diam velit. Donec nec luctus diam.</p>
        </div>
        <h2 style={{textAlign: 'center',marginTop: 20, fontSize:40}}>Our Chefs <SiCodechef style={{fontSize:35,textAlign: 'center'}} /> </h2>
        <div className="wrapper">
            {chefData.map(item => (
                <Card key={item.id} name={item.name} pic={item.pic} idx={item.id} />
            ))}
        </div>
     </section>
       
    )
}

export default About
