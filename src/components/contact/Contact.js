import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';

const Contact = () => {
    return (
        <section id='contact'>
           <h5>Get In Touch</h5>
           <h2>Contact Me</h2>

           <div className="container contact__container">
               <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>roy28301@gmail.com</h5>
                        <a href="mailto:roy28301@gmail.com" target="_blank">Send email</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Joy Roy Tanmoy</h5>
                        <a href="https://m.me/joyroy.tanmoy" target="_blank">Send a message</a>
                    </article>
               </div>
               {/* -----End Of Contact Option */}

               <form action="">
                   <input type="text" name='name' placeholder='Your Full Name' required />
                   <input type="email" name='email' placeholder='Your Email' required />
                   <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
                   <button type='submit' className='btn btn-primary'>Send Message</button>
               </form>
           </div>
        </section>
    );
};

export default Contact;