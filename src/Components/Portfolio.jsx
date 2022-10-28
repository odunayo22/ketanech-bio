import React from 'react';

function Portfolio(){
    return (
        <div>
 <section className="w3l-gallery pb-5" id="gallery">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small mb-1">Portfolio</h5>
                <h3 className="title-style">Some of our most recent projects</h3>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 item">
                    <a href="assets/images/control1.jpg" data-lightbox="example-set" data-title="Project 1"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src="assets/images/control1.jpg" alt="Card image cap" />
                        <span className="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 1</span>
                            <span className="content">Solar Installation Control Room.</span>
                        </span>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 item mt-md-0 mt-4">
                    <a href="assets/images/control2.jpg" data-lightbox="example-set" data-title="Project 2"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src="assets/images/control2.jpg" alt="Card image cap" />
                        <span className="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 2</span>
                            <span className="content">Battery Rack Settings.</span>
                        </span>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 item mt-lg-0 mt-4">
                    <a href="assets/images/panel1.jpg" data-lightbox="example-set" data-title="Project 3"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src="assets/images/panel1.jpg" alt="Card image cap" />
                        <span className="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 3</span>
                            <span className="content">Solar Panels.</span>
                        </span>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 item mt-4 pt-lg-2">
                    <a href="assets/images/panel2.jpg" data-lightbox="example-set" data-title="Project 4"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src="assets/images/panel2.jpg" alt="Card image cap" />
                        <span className="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 4</span>
                            <span className="content">Solar Panels.</span>
                        </span>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 item mt-4 pt-lg-2">
                    <a href="assets/images/pressure2.png" data-lightbox="example-set" data-title="Project 4"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src="assets/images/pressur.png" alt="Card image cap" />
                        <span className="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 5</span>
                            <span className="content">Pressure Monitoring.</span>
                        </span>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 item mt-4 pt-lg-2">
                    <a href="assets/images/digeste.jpg" data-lightbox="example-set" data-title="Project 6"
                        className="zoom d-block">
                        <img className="card-img-bottom d-block" src="assets/images/digest.jpg" alt="Card image cap" />
                        <span className="overlay__hover"></span>
                        <span className="hover-content">
                            <span className="title">Project 6</span>
                            <span className="content">Digester with Solar</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}



export default Portfolio