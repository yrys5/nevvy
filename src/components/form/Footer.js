import React from 'react'
import partner1 from '../../assets/images/ewroon-profile-partner.png';
import partner2 from '../../assets/images/edenitoo-profile-partner.png';
import partner3 from '../../assets/images/diables-profile-partner.png';
import partner4 from '../../assets/images/exhiie-profile-partner.png';
import { Link } from 'react-router-dom';

const Footer = () => {
const footerWidth = "30px";

  return (
    <section className='footer-wrapper'>
        <div className='footer-center'>
        <div className='footer-left'>
            <h3>Partnerzy:</h3>
        <div className='footer-partner-list'>
            <a href='https://www.twitch.tv/ewroon'>
            <div className='footer-single-partner'>
                <img src={partner1} alt='patrner-ewroon' width={footerWidth} className='single-partner-img'></img>
                <p>ewroon</p>
            </div>
            </a>
            <a href='https://www.twitch.tv/edenitoo'>
            <div className='footer-single-partner'>
                <img src={partner2} alt='patrner1' width={footerWidth} className='single-partner-img'></img>
                <p>edenitoo</p>
            </div>
            </a>
            <a href='https://www.twitch.tv/diables'>
            <div className='footer-single-partner'>
                <img src={partner3} alt='patrner1' width={footerWidth} className='single-partner-img'></img>
                <p>diables</p>
            </div>
            </a>
            <a href='https://www.twitch.tv/exhiie'>
            <div className='footer-single-partner'>
                <img src={partner4} alt='patrner1' width={footerWidth} className='single-partner-img'></img>
                <p>exhiie</p>
            </div>
            </a>
        </div>
        </div>
        <div className='footer-right'>
            <Link to='/about-us' style={{textDecoration: "none", color: "#ffffff"}}>O nas</Link>
            <Link to='/contact' style={{textDecoration: "none", color: "#ffffff"}}>Kontakt</Link>
            <Link to='/privacy-policy' style={{textDecoration: "none", color: "#ffffff"}}>Polityka prywatności</Link>
            <Link to='/terms-and-conditions' style={{textDecoration: "none", color: "#ffffff"}}>Warunki i zasady</Link>
        </div>
        </div>
    </section>
  )
}

export default Footer