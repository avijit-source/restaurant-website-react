import React, { useState} from 'react';
import {FaArrowAltCircleUp} from 'react-icons/fa';

  
const ScrollToTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button style={{display: visible ? 'inline' : 'none',marginLeft:5}} onClick={scrollToTop} className="scroll-btn">
     <FaArrowAltCircleUp style={{fontSize:20,top:0,left:0,translateX:"50%"}} />
    </button>
  );
}
  
export default ScrollToTop;
