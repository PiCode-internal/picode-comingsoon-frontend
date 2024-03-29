import React, { useState } from 'react';
import "../../css/comingsoon.css"
import logo from "../../icons/logo.svg"
import ImgAnimation from '../components/img_animation'
import { Formik, Form } from 'formik';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';


function ComingsoonPage() {

  const [submitted, setSubmitted] = useState(false);
  const [alreadySubmit, setAlreadySubmit] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (values) => {
    try {
      setLoading(true)

      let payload = {
        email: values?.email
      }
      const response = await axios.post('https://picode-comingsoon-backend.vercel.app/api/email/send', payload);
      let userEmail = []
      let storeEmail = localStorage.getItem("email")
      if (storeEmail === null || storeEmail === undefined || storeEmail.length === 0) {
        userEmail = [values.email]
        localStorage.setItem('email', JSON.stringify(userEmail));

      } else {
        if (storeEmail?.includes(values.email)) {
          setAlreadySubmit(true)
        } else {
          userEmail = JSON.parse(storeEmail);
          userEmail.push(values.email)
          localStorage.setItem('email', JSON.stringify(userEmail));
          setSubmitted(true)

        }
      }


    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setLoading(false)
    }
  };




  return (
    <div className='main-wrapper'>
      <header>
        <div className="header">
          <div className='container'>
            <div className='row'>
              <div className='mainLogo'>
                <img className='logo1' src={logo} alt="logo" />
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
                        {
                          submitted ?
                            <>
                              <div className='subscribed'>
                                <p className='text-success thanks_text'>Thanks for subscribing. We will update you!</p>
                                <p>
                                  <a href="/" className='register_btn' style={{ color: 'black' }} >
                                    Register another!
                                  </a>
                                </p>
                              </div>


                            </>
                            : <>
                              <div className='email_form'>
                                <div className='email_div' >
                                  <input
                                    className='email_input'
                                    name="email"
                                    placeholder={"Enter you email address"}
                                    value={values?.email}
                                    onChange={handleChange}
                                  />
                                  {/* <p className='text-danger mt-2'> {errors.email && touched.email && errors.email}</p> */}
                                </div>
                                <div>
                                  {
                                    alreadySubmit ?
                                      <div className='subscribed'>
                                        <p>
                                          <a href="/" className='register_btn mx-3' style={{ color: 'black' }} >
                                            Register another!
                                          </a>
                                        </p>
                                      </div>
                                      : <LoadingButton loading={loading} type="submit" onclick={handleSubmit} className='btn email_btn' disabled={loading}>{"Subscribe"}</LoadingButton>
                                  }
                                </div>
                                {alreadySubmit ? <div className='subscriber_msg'> <p className='text-success thanks_text'>Thanks for the interest, you are already in our subscriber list. We will keep you posted first on our updates</p> </div> : ""}
                              </div>
                            </>
                        }
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
    </div >
  )
}

export default ComingsoonPage;