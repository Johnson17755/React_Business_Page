import React from 'react';
import './Contact.css';
import ContactImage from '../../assets/contact/contact.jpg'

export default function Contact() {
  return (
    <>
        <section id="contact">
            <div className="container">
                <div className="contact_wrapper">
                    <div className="contact_col">
                        <div className="contact_image">
                            <img src={ ContactImage } alt="Contact" />
                        </div>
                    </div>
                    <div className="contact_col">
                        <h2>Contact US</h2>
                        <form action="">
                            <div className="input_wrapper">
                                <input type="text" className='form_control' placeholder='Name...'
                                autoComplete='off' />
                            </div>
                            <div className="input_wrapper">
                                <input type="text" className='form_control' placeholder='Phone Number...'
                                autoComplete='off' />
                            </div>
                            <div className="input_wrapper">
                                <input type="email" className='form_control' placeholder='Email Address...'
                                autoComplete='off' />
                            </div>
                            <div className="input_wrapper">
                                <textarea placeholder='Message'></textarea>
                            </div>
                            <div className="btn_wrapper">
                                <button type="submit" className='btn'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

