import React, { useEffect } from 'react'
import "../../css/unsubscribe.css"
import logo from "../../icons/logo.svg"
import axios from 'axios';



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
    <div className='main_unsubscribe_div'>

      <div className='container'>
        <div style={{ textAlign: "left" }}>
          <img className='logo1' src={logo} alt="logo" />
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='unsubscribe_div'>
              <h2 className='unsubscribe_title'>Picode Team</h2>
              <p className='unsubscribe_text'>You’ve unsubscribed from our mailing list.</p>
              <p className='unsubscribe_text'>You won’t receive any updates from us. You can subscribe again at any time</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Unsubscribe 