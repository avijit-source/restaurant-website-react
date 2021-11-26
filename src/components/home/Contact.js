import React, { useEffect } from 'react'
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FcPhone} from 'react-icons/fc';
import { BsTelephoneInbound} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {FcContacts} from 'react-icons/fc'


function Contact() {
    useEffect(() => {
        AOS.init({ duration:1000 })
    }, [])
    return (
        <div className="contact-in" data-aos="flip-down">
			<div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29261.69361345809!2d87.28732443157406!3d23.542869470276923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f771f93fbd934d%3A0x5726ef1ea24f3a69!2sCity%20Center%2C%20Durgapur%2C%20West%20Bengal%20713216!5e0!3m2!1sen!2sin!4v1637651664848!5m2!1sen!2sin"  width="100%" height="auto" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
			</div>
			<div className="contact-form">
				<h1> <FcContacts /> Contact Us</h1>
                <hr />
				<span className="contact-span"><FcPhone /> 9812345678</span>
				<span className="contact-span"><BsTelephoneInbound /> 0341876784</span>
				<span className="contact-span" style={{marginBottom:20}}><AiOutlineMail /> test@email.com</span>
                <hr />
                <p style={{marginTop:10,fontSize:20}}>Call or mail us for any queries</p>
			</div>
		</div>
    )
}

export default Contact
