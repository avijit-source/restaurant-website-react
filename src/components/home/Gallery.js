import React, { useEffect } from 'react';
import gallery10 from '../../assets/gallery10.jpg';
import gallery9 from '../../assets/gallery9.jpg';
import gallery8 from '../../assets/gallery8.jpg';
import gallery5 from '../../assets/gallery5.jpg';
import gallery12 from '../../assets/gallery12.jpg';
import gallery13 from '../../assets/gallery13.jpg';
import gallery14 from '../../assets/gallery14.jpg';
import gallery15 from '../../assets/gallery15.jpg';
import gallery16 from '../../assets/gallery16.jpg';
import gallery17 from '../../assets/gallery17.jpg';
import gallery18 from '../../assets/gallery18.jpg';
import gallery19 from '../../assets/gallery19.jpg';
import gallery20 from '../../assets/gallery20.jpg';
import './gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BsCardImage} from 'react-icons/bs';

function Gallery() {
    useEffect(() => {
        AOS.init({ duration:1000 })
    }, [])

    const imgArr = [gallery12, gallery13,
         gallery14, gallery15, gallery16,
         gallery17, gallery18, gallery19,
         gallery20,gallery10,gallery8]


      const animationArr = 
       ["fade-right","fade-down-right","flip-down",
       "flip-right","slide-left","zoom-in-right","zoom-in-up","zoom-out-up","fade-left","zoom-in-left","flip-up","zoom-in-up"] 
      
       let tracker=0;

     let handleAnimation = () => {
        if(tracker>=11){
            tracker = 0;
        }else{
            tracker++;
            return animationArr[tracker]
        }
    }

    return (
        <section className="gallery-section">
            <h2 style={{textAlign: 'center',fontSize: '50px',marginBottom:"30px"}}>Gallery <BsCardImage style={{fontSize:40,textAlign: 'center'}} /> </h2>
        <div className="image-grid">
            <img src={gallery5} className="image-grid-col-2 image-grid-row-2" data-aos="flip-up" />
             {imgArr.map((img,idx)=>(
                <img src={img} key={idx} data-aos={handleAnimation()} className="grid-list-images" />
             ))}
             <img src={gallery9} data-aos="flip-up" className="grid-list-images" />
        </div>
        </section>
        
    )
}

export default Gallery
