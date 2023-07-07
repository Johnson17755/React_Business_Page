import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
          //FontAwesomeIcon
    const faArrowUpIcon =<FontAwesomeIcon icon= { faArrowUp }  />

     // State 
        const [ isVisible, setIsVisible ] = useState(false);

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        const listenToScroll = () => {
            let heightToHidden = 250;
            const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

            (windowScroll > heightToHidden) ? setIsVisible(true) : setIsVisible(false);
        }

        useEffect(() =>{
            window.addEventListener('scroll', listenToScroll);
        })

  return (
    <>
    <section className='container'>
        <footer className="footer">
            <p>&copy; All Right Reserved 2023 Designed By <a href="/">Johnson Script</a></p>
        </footer>
    </section>

      {/* Scroll to Top  */}
        {
            isVisible && (
                <div className="scroll_top" onClick={scrollToTop}>
                    { faArrowUpIcon }
                </div>
            )
        }
    </>
  )
}

