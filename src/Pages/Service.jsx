import React from 'react';
import Offer from '../Components/Offer';
import Project from '../Components/Project';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div>
         <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
            <div className="container pt-4 pb-sm-4">
                <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">Services</h4>
                <ul className="breadcrumbs-custom-path">
                   <Link to="/"> <li>Home</li></Link>
                    <li className="active"><i className="fas fa-angle-right mx-2"></i>Services</li>
                </ul>
            </div>
        </div>
    </section>

        <Offer />
        <Project />
        <Footer />
    </div>
  )
}

export default Service