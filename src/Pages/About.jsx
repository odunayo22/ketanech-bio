import React from 'react'
import { Link } from 'react-router-dom';
import Intro from '../Components/Intro';
import Why from '../Components/Why';
import Footer from '../Components/Footer';



function About() {
  return (
    <div>
       
       <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
            <div className="container pt-4 pb-sm-4">
                <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">About Us</h4>
                <ul className="breadcrumbs-custom-path">
                   <Link to="/"><li>Home</li></Link>
                    <li className="active"><i className="fas fa-angle-right mx-2"></i>Our Intro</li>
                </ul>
            </div>
        </div>
    </section>
    <Intro />
   <Why />
    <Footer />
    
        
    </div>
  )
}

export default About