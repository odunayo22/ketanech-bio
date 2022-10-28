import React from 'react'
import { Link } from 'react-router-dom'; 

function Why() {
  return (
    <div>
        <section className="w3l-timeline-1 text-center py-5">
        <div className="container py-lg-5 py-4">
            <div className="mx-auto" style={{maxWidth : 800 + "px"}}>
                <h3 className="title-style mb-4">Why hire KTS for your next project?</h3>
                <p>We love to create and innovate, also love to solve the design
                    problem
                    and find easy and better solutions to solve it. Our designs  and Services are always the best
                    with
                    the best user experience.</p>
                    <Link to="/about"><li>
                Learn More</li></Link>
            </div>
        </div>
    </section>
    <section className="w3l-about2 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="row align-items-center">
                <div className="col-lg-6 pe-lg-5">
                    <h5 className="title-small mb-1">Electronics Design</h5>
                    <h3 className="title-style">We would Love to make your Ideas real</h3>
                    <div className="cwp23-text-cols mt-lg-5 mt-4">
                        <div className="column">
                            <span>1200+</span>
                            <h4>Happy Clients</h4>
                            <p>We make our clients happy by offering them the best of our services.</p>
                        </div>
                        <div className="column">
                            <span>13k+</span>
                            <h4>Completed projects </h4>
                            <p>We make our clients happy by offering them the best of our services </p>
                        </div>

                    </div>
                </div>
                <div className="col-lg-6 cwp23-text align-self mt-lg-0 mt-5">
                    <img src="assets/images/blog5.jpg" alt="" className="radius-image img-fluid" />
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Why