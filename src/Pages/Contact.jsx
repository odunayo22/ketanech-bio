import React from 'react';
import Footer from '../Components/Footer';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const  Contact = () => {
  return (
    <div>
       
       <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
            <div className="container pt-4 pb-sm-4">
                <h4 className="inner-text-title pt-sm-5 pt-4">Contact Us</h4>
                <ul className="breadcrumbs-custom-path mt-2">
                    <li><a href="index.html">Home</a></li>
                    <li className="active"><i className="fas fa-angle-right mx-2"></i>Contact Us</li>
                </ul>
            </div>
        </div>
    </section>
   
    <section className="w3l-contact py-5" id="contact">
        <div className="container py-lg-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small">Get In Touch</h5>
                <h3 className="title-style">Contact Us</h3>
            </div>
            <div className="row contact-block">
                <div className="col-md-6 contact-left pe-lg-5">
                    <h3 className="mb-sm-4 mb-3">Contact Info</h3>
                    <p className="cont-para mb-sm-5 mb-4">I enjoy discussing new projects and design challenges. Please
                        share as
                        much info, as possible so
                        we can get the most out of our first catch-up.</p>
                    <div className="cont-details">
                        <p><i className="fas fa-map-marker-alt"></i>73, Hammed Omidiran way, Kolabalogun area, Osogbo, Osun State</p>
                        <p><i className="fas fa-phone-alt"></i><a href="tel:08039244577">08039244577</a></p>
                        <p><i className="fas fa-envelope-open-text"></i><a href="mailto:ketanech03@gmail.com"
                                className="mail">ketanech03@gmail.com</a></p>
                    </div>
                    <h4 className="mb-3 mt-5">Follow Us</h4>
                    <ul className="social-icons-contact">
                        <li>
                            <a href="#twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#linkedinin">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#github">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 contact-right mt-md-0 mt-5 ps-lg-0">
                    <form action="https://sendmail.odun4code@gmail.com" method="post" className="signin-form">
                        <div className="input-grids">
                            <input type="text" name="name" id="w3lName" placeholder="Your Name*"
                                className="contact-input" required="" />
                            <input type="email" name="email" id="w3lSender" placeholder="Your Email*"
                                className="contact-input" required="" />
                            <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject*"
                                className="contact-input" required="" />
                           
                        </div>
                        <div className="form-input">
                            <textarea name="message" id="w3lMessage" placeholder="Type your message here*"
                                required=""></textarea>
                        </div>
                        <button className="btn btn-style">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  
    <div className="map-iframe">
        <iframe

       src="https://www.google.com/maps/embed?place/Omidiran+Gardens/@7.8043071,4.580403,18z/data=!4m9!1m2!2m1!1sOmidiran+Gardens!3m5!1s0x1037888aba1d28eb:0xab549e4428b7646e!8m2!3d7.8040088!4d4.5817735!15sChBPbWlkaXJhbiBHYXJkZW5zkgEHbG9kZ2luZw?hl=en-NG"width="100%" height="400" frameBorder="0" allowFullScreen=""></iframe>
    </div>

<Footer />
    </div>
  )
}

export default Contact