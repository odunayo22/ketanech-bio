import React from 'react';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <div>
       
    <section className="w3l-servicesblock1 py-5" id="services">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small mb-1">What we do?</h5>
                <h3 className="title-style">How we can help your next project</h3>
            </div>
            <div className="w3-services-grids py-lg-4">
                <div className="fea-gd-vv row">
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-gd icon-yellow">
                            <div className="icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <div className="icon-info">
                                <a href="#url">Electrical Electronics<br /> and Engineering </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                        <div className="feature-gd icon-vilot">
                            <div className="icon">
                                <i className="fas fa-car-alt"></i>
                            </div>
                            <div className="icon-info">
                                <a href="#url">Inverter Contruction<br /> Installation</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-5 mt-4">
                        <div className="feature-gd icon-blue">
                            <div className="icon">
                                <i className="fab fa-machine-alt"></i>
                            </div>
                            <div className="icon-info">
                                <a href="#url">Mechatronics<br /> Engineering</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-5 mt-4">
                        <div className="feature-gd icon-red">
                            <div className="icon">
                                <i className="fab fa-door-alt"></i>
                            </div>
                            <div className="icon-info">
                                <a href="#url">Automation with<br /> Construction</a>
                            </div>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
            <div className="text-center mt-5">
                <Link to="/about" className="btn btn-style">Learn More</Link>
            </div>
        </div>
    </section>
  
    </div>
  )
}

export default Project