import React from 'react'
import "../../css/comingsoon.css"

import circle1 from "../../images/img1.png"
import circle2 from '../../images/img2.png'
import circle3 from '../../images/img3.png'
import circle4 from '../../images/img4.png'
import circle6 from '../../images/5278 1.png'


const ImgAnimation = () => {
  return (
    <>
      <div className='img-wrapper'>

        <img className='coming_img sky_blue' src={circle3} alt="skyblue" />
        <img className='coming_img light_green' src={circle4} alt="lightGreen" />
        <img className='coming_img pinnk' src={circle1} alt="pink" />
        <img className='coming_img yelllow' src={circle2} alt="yellow" />


        <img className='main_img' src={circle6} alt="people" />

      </div>


    </>
  )
}

export default ImgAnimation