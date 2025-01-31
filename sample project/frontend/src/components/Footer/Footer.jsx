import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Thank you for visiting Tomato! If you have any questions or need assistance, feel free to get in touch.
              Stay connected with us on social media:</p>
            <div className="footer-social-icons">
               <a href="https://facebook.com/tomato" target="_blank" rel="noopener noreferrer">
               <img src={assets.facebook_icon} alt="Facebook" /></a>
                
                 <a href="https://twitter.com/tomato" target="_blank" rel="noopener noreferrer">
                    <img src={assets.twitter_icon} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/ankita-pawar-b66a80258/" target="_blank" rel="noopener noreferrer">
                <img src={assets.linkedin_icon} alt="" /></a>
                
            </div>
        </div>
        <div className="footer-content-center">
             <h2>COMPANY</h2>
             <ul>
                <li>Home</li>
                <li>about us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
             </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+91 1234541234</li>
            <li>conatct@tomato.com</li>
        </ul>
        </div>
        
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2025 @ tomato.com -All rights reserved</p>
    </div>
  )
}

export default Footer