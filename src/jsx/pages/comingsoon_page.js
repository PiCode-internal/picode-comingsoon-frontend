import React from 'react'
import "../../css/comingsoon.css"
import logo from "../../icons/logo.png"
import ImgAnimation from '../components/img_animation'


function comingsoonPage() {
  return (
    <div className='main-wrapper'>
      <header>
        <div className="header">
          <div className='container'>
            <div className='row'>
              <div className='mainLogo'>
                <img className='logo' src={logo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-6 col-sm-12 order'>
            <div className='coming_soon'>
              <h1 className='heading'>Coming Soon</h1>
              <h4 className='description'>
                Tech and design evolution coming your way!
                <br />
                <span className='extraText'>Be the first to know.</span>
              </h4>
              <div>
                <input className='email_input' name="email" placeholder={"Enter you email address"} />
                <button className='btn email_btn'>Subscribe</button>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 col-sm-12'>
            <ImgAnimation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default comingsoonPage;