import React, { useState } from 'react';
import "../../css/comingsoon.css"
import logo from "../../icons/logo.png"
import ImgAnimation from '../components/img_animation'
import { Formik, Form } from 'formik';
import axios from 'axios';


function ComingsoonPage() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async (values, { resetForm }) => {
    try {
      let payload = {
        email: values?.email
      }
      // const response = await axios.post('https://picode-comingsoon-backend.vercel.app/api/email/send', payload);
      // console.log('Subscription response:', response);
      // sessionStorage.setItem('email', values?.email);
      setSubmitted(true)

      resetForm(); // Reset the form values
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  if (submitted) {
    return (
      <div>
        <p>Thank you for your Suscrible!</p>
        <p>
          <a href="#" >
            Register another!
          </a>
        </p>
      </div>
    );
  }

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


              <Formik
                initialValues={{ email: "" }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Please enter the email address !';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={handleSubscribe}
              >
                {
                  ({ values, handleChange, errors, touched, handleSubmit, isSubmitting }) => {
                    return (
                      <Form>

                        <div className='email_form'>
                          <input
                            className='email_input'
                            name="email"
                            placeholder={"Enter you email address"}
                            value={values?.email}
                            onChange={handleChange}
                          />
                          <p className='text-danger mt-2'> {errors.email && touched.email && errors.email}</p>
                        </div>
                        <div>
                          <button className='btn email_btn' type='submit' disabled={isSubmitting}>Subscribe</button>
                        </div>

                      </Form>
                    )
                  }
                }
              </Formik>


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

export default ComingsoonPage;