import React, { useState } from 'react';
import "../../css/comingsoon2.css"
import logo from "../../icons/logo.svg"
import diamond from '../../images/comingsoon2/ezgif.com-crop.gif'
import doctor1 from "../../images/comingsoon2/4194.jpg"
import pencil from "../../images/comingsoon2/5270 3.png"
import tools from "../../images/comingsoon2/5270 7.png"
import calender from "../../images/comingsoon2/5270 1.png"
import cycle from "../../images/comingsoon2/bwink_msc_09_single_05.jpg"
import technology from "../../images/comingsoon2/37557 1.png"
import doller from "../../images/comingsoon2/3091088 2.png"
import multiple from "../../images/comingsoon2/9145 1.png"
import watch from "../../images/comingsoon2/894 1.png"
import letters from "../../images/comingsoon2/3091088 1.png"
import colour from "../../images/comingsoon2/5270 8.png"
import light from "../../images/comingsoon2/5270 12.png"
import brush from "../../images/comingsoon2/5270 4.png"
import pen from "../../images/comingsoon2/5270 11.png"
import idea from "../../images/comingsoon2/37556.jpg"
import roller from "../../images/comingsoon2/bwink_edu_01_single_02 1.png";
import men from "../../images/comingsoon2/v1064-10 1.png"
import eye from "../../images/comingsoon2/5270 14.png"
import { Formik, Form } from 'formik';
import axios from 'axios';



const ComingsoonPage2 = () => {

  const screenWidth = window.innerWidth;
  const shouldShowImage = screenWidth > 576;
  const showImage = screenWidth > 450;
  const showImage2 = screenWidth > 320;

  const [userEmail, setUserEmail] = useState([])
  const [submitted, setSubmitted] = useState(false);
  const [alreadySubmit, setAlreadySubmit] = useState(false)

  const handleSubscribeTwo = async (values, { setSubmitting }) => {
    try {
      let payload = {
        email: values?.email
      }
      const { data } = await axios.post('https://picode-comingsoon-backend.vercel.app/api/email/send', payload);
      let userEmail = []
      let storeEmail = localStorage.getItem("email")
      if (storeEmail === null || storeEmail === undefined || storeEmail.length === 0) {
        userEmail = [values.email]
        localStorage.setItem('email', JSON.stringify(userEmail));
        setSubmitted(true)
        setSubmitting(false);

      } else {
        if (storeEmail?.includes(values.email)) {
          setAlreadySubmit(true)
          setSubmitting(false);
        } else {
          userEmail = JSON.parse(storeEmail);
          console.log("userEmail", userEmail)// Parse the stored string back to an array
          userEmail.push(values.email)
          localStorage.setItem('email', JSON.stringify(userEmail));
          setSubmitted(true)
          setSubmitting(false);

        }
      }


    } catch (error) {
      console.error('Subscription error:', error);
    }
  };


  return (
    <div className='main-wrapper2
    '>
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

      {/* random images */}


      {
        shouldShowImage ?
          <>
            <div className='pencil_div'>
              <img className='pencil' src={pencil} alt="pencil" />
            </div>

            <div className='tools_div'>
              <img className='tools' src={tools} alt="tools" />
            </div>
            <div className='colour_div'>
              <img className='colour' src={colour} alt="colour" />
            </div>
            <div className='eye_div'>
              <img className='eye' src={eye} alt="eye" />
            </div>
            <div className='calender_div'>
              <img className='calender' src={calender} alt="calender" />
            </div>

          </>
          : null
      }

      {
        showImage ?
          <>
            <div className='calender_div'>
              <img className='calender' src={calender} alt="calender" />
            </div>

          </>
          : null
      }

      {
        showImage2 ?
          <>
            <div className='idea_div'>
              <img className='idea' src={idea} alt="idea" />
            </div>

            <div className='multiple_div'>
              <img className='multiple' src={multiple} alt="multiple" />
            </div>
          </>
          : null
      }


      <div className='doctor_div'>
        <img className='doctor1' src={doctor1} alt="doctor1" />
      </div>

      <div className='cycle_div'>
        <img className='cycle' src={cycle} alt="cycle" />
      </div>

      <div className='technology_div'>
        <img className='technology' src={technology} alt="technology" />
      </div>

      <div className='doller_div'>
        <img className='doller' src={doller} alt="doller" />
      </div>

      <div className='multiple_div'>
        <img className='multiple' src={multiple} alt="multiple" />
      </div>

      <div className='watch_div'>
        <img className='watch' src={watch} alt="watch" />
      </div>

      <div className='letters_div'>
        <img className='letters' src={letters} alt="watch" />
      </div>



      <div className='light_div'>
        <img className='light' src={light} alt="light" />
      </div>

      <div className='pen_div'>
        <img className='pen' src={pen} alt="pen" />
      </div>

      <div className='brush_div'>
        <img className='brush' src={brush} alt="brush" />
      </div>


      <div className='idea_div'>
        <img className='idea' src={idea} alt="idea" />
      </div>

      <div className='roller_div'>
        <img className='roller' src={roller} alt="roller" />
      </div>

      <div className='men_div'>
        <img className='men' src={men} alt="men" />
      </div>

      <div className='main_div'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='diamond_gif'>
                <img className='main_gif' src={diamond} alt="diamond_gif" />
              </div>
            </div>
            <div className='col-12'>
              <div className='coming_soon_2'>
                <h1 className='heading2'>Coming Soon</h1>
                <div className='descriotion_div'>
                  <h4 className='description2'>
                    Tech and design evolution coming your way!
                  </h4>
                </div>
                <p className='extraText2'>Be the first to know.</p>
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
                  onSubmit={handleSubscribeTwo}
                >
                  {({ values, handleChange, errors, touched, handleSubmit, isSubmitting }) => {
                    return (
                      <Form>
                        {
                          submitted ?
                            <>
                              <div className='subscribed2'>
                                <p className='text-success thanks_text2'>Thanks for subscribing. We will update you!</p>
                                <p>
                                  <a href="/" className='register_btn2' style={{ color: 'black' }} >
                                    Register another!
                                  </a>
                                </p>
                              </div>


                            </> : <>
                              <div className='email_form2'>
                                <div className='email_div2' >
                                  <input
                                    className='email_input2'
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
                                      <div className='subscribed2'>
                                        <p>
                                          <a href="/" className='register_btn2 mx-3' style={{ color: 'black' }} >
                                            Register another!
                                          </a>
                                        </p>
                                      </div>
                                      : <button className='btn email_btn2' type='submit' disabled={isSubmitting}>Subscribe</button>
                                  }
                                </div>

                              </div>
                              <div className='last_msg'>
                                {alreadySubmit ? <div className='subscriber_msg2'> <p className='text-success thanks_text2'>Thanks for the interest, you are already in our subscriber list. We will keep you posted first on our updates</p> </div> : ""}
                              </div>

                            </>
                        }
                      </Form>
                    )
                  }}
                </Formik>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ComingsoonPage2;