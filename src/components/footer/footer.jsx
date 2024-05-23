import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <div className='subscribe-header'>
          <div>
            <h2 className='subscribe-newsletter'>SUBSCRIBE TO OUR QUARTERLY NEWSLETTER </h2>
          </div>
          <div className='send-email-section'>
            <input className='email-input' type="text" placeholder='Enter your email adress'/>
            <button className='send-email'>SUBSCRIBE</button>
          </div>
        </div>

        <div className='bottom-section'>
          <div className='left-bottom-section'>
            <h6>TERMS & CONDITIONS</h6>
            <h6>PRIVACY POLICY</h6>
            <h6>SITEMAP</h6>
          </div>

          <div>
            <h4>Copyright 2024</h4>
            <h6>Website by Vărăreanu Olivian</h6>
          </div>
        </div>

    </footer>
  )
}

export default Footer
