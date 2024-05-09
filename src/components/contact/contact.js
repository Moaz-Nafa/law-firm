import React from 'react'
import './contact.css';
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from 'react';
import emailjs from "emailjs-com"



 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o1dnc96', 'template_589jpef', form.current, 'hwYEDUm55dPxgzrYf')
 
      e.target.reset();
  };

  return (
    <section id='contact'>
      <div className='contact-title'>
      <h4>Get in Touch</h4>
      <h1>Contact Us</h1>
      </div>

      <div className="container contact__container">
        <div className="contact__obtions">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lawyerzaki1@gmail.com</h5>
            <a href="mailto:lawyerzaki1@gmail.com" target='_blank' className='contact-a'>Send an email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Tantawi Team</h5>
            <a href="https://m.me/azat.male" target='_blank' className='contact-a'>Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>+02 1159297283</h4>
            <h5>WhatsApp</h5>
            <a href="https://api.whatsapp.com/send?phone=+201159297283" target='_blank' className='contact-a'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder='Your Name' required/>
          <input type="email" name="email_id" placeholder='Your email' required/>
          <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
          <button type='sumit'  className='btn'>Send Messeage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

