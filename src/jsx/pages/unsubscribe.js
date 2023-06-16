import React, { useEffect } from 'react'
import "../../css/unsubscribe.css"
import logo from "../../icons/logo.svg"
import axios from 'axios';
import unsubscribeImage from "../../images/download.jpeg"



const Unsubscribe = () => {
  useEffect(() => {
    (async () => {
      const params = new URLSearchParams(window.location.search);
      const emailID = params.get('email');
      let payload = {
        email: emailID
      }
      const { data } = await axios.post('https://picode-comingsoon-backend.vercel.app/api/email/unsubscribe', payload);
    })()
  }, [])



  return (
    <div className='main_wrapper'>

      <div className='container'>
        <div style={{ textAlign: "left" }}>
          <img className='logo1' src={logo} alt="logo" />
        </div>
        <div className='main_unsubscribe_div'>
          <div className='row'>
            <div className='col-12'>
              <div className='unsubscribe_div'>
                <div>
                  <img src={unsubscribeImage} className='unsub_img' alt="unsubscribe" />
                </div>
                <div>
                  <h1 className='unsubscribe_title'>Thank you</h1>
                  <p className='unsubscribe_text desktop'>You have been successfully removed from this subscriber list and <br /> won't recieve any future emails from us.</p>
                  <p className='unsubscribe_text mobile'>You have been successfully removed from this subscriber list and  won't recieve any future emails from us.</p>
                  <div className='resubscribe_div'>
                    <p className='resubscribe_text'>Did you unsubscribe bt accident?</p> <a href='/' className='link_sub'>Re-subscribe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Unsubscribe 