import React from 'react';
import video from '../assets/images/temp-monitor.mp4';

const Intro = () => {
   
  return (
    <div>
       <section className="w3l-aboutblock1 pt-lg-5 pt-2 pb-5" id="about">
        <div className="container py-md-5 py-4">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <div className="position-relative">
                        <img src="assets/images/flier.jpg" alt="" className="radius-image img-fluid" />
                    </div>
                </div>
                <div className="col-lg-8 ps-lg-5 mt-lg-0 mt-5">
                    <h5 className="title-small mb-1">Our Intro</h5>
                    <h3 className="title-style">About Us</h3>
                    <p className="mt-3">An Electrical Electronics Engineering  Company that is experienced in Automation, Mechanical Electronics, Electrical Electronics Engineering.</p>
                    <div className="my-info mt-md-5 mt-4">
                        <ul className="single-info">
                            <li className="name-style">Name</li>
                            <li>:</li>
                            <li>
                                <p>Ketanech Technology Services.</p>
                            </li>
                        </ul>
                        <ul className="single-info">
                            <li className="name-style">Existence</li>
                            <li>:</li>
                            <li>
                                <p>20 Years</p>
                            </li>
                        </ul>
                        <ul className="single-info">
                            <li className="name-style">Office</li>
                            <li>:</li>
                            <li>
                                <p>73, Hammed Omidiran Way, Kolabalogun Area, Osogbo, Osun State</p>
                            </li>
                        </ul>
                        <ul className="single-info">
                            <li className="name-style">Email</li>
                            <li>:</li>
                            <li>
                                <p><a href="mailto:ketanech03@gmail.com.com">ketanech03@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>

                   
                    <div className="col-lg-4 col-md-6 item">
                        <a href = {video}>
                        <span className="btn btn-style mt-5">Work Preview</span></a>
                    </div>
                  

                </div>
            </div>
        </div>
    </section>
    </div>   
   
  )
}

export default Intro;