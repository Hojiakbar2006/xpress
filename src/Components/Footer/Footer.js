import React from 'react'
import "./Footer.css"

import facebook from "../../Assets/images/facebook.svg"
import instagram from "../../Assets/images/instagram.svg"
import twitter from "../../Assets/images/twitter.svg"
import In from "../../Assets/images/in.svg"

export function Footer() {
  return (
    <footer id='footer'>
      <div>
        <img src="./LOGO2.svg" alt="" />
        <p className='footerp'>Contrary to popular  is not simply random text. It has </p>
        <div>
          <a href='https://www.facebook.com'>
            <img src={facebook} alt="" />
          </a>
          <a href='https://www.instagram.com'>
            <img src={instagram} alt="" />
          </a>
          <a href='https://www.twitter.com'>
            <img src={twitter} alt="" />
          </a>
          <a href='topolmadm-nmaligini'>
            <img src={In} alt="" />
          </a>
        </div>
      </div>

      <div>
        <h2>Quick Link</h2>
        <p>Home</p>
        <p>Blog</p>
        <p>Carrer</p>
        <p>New Arrival</p>
      </div>
      <div>
        <h2>Support</h2>
        <p>FAQ</p>
        <p>How it Works</p>
        <p>Features</p>
        <p>Contact</p>
      </div>
      <div>
        <h2>Contact us</h2>
        <p>+880 1767812324</p>
        <p>mb1673072@gmail.com</p>
        <p>37/1 Aleraza Market</p>
      </div>
    </footer>
  )
}
