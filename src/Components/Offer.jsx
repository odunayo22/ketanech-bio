import React from 'react'

function Offer() {
  return (
    <div>
        <section className="w3l-bottom-grids-6 py-5" id="features">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small mb-1">specialized In</h5>
                <h3 className="title-style">What we Offer</h3>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 grids-feature">
                    <div className="area-box active">
                        <div className="icon-style">
                            <i className="fas fa-lightbulb"></i>
                        </div>
                        <h4><a href="#feature" className="title-head">Creative Design</a></h4>
                        <a href="about.html" className="btn more p-0">Explore More<i
                                className="fas fa-long-arrow-alt-right ms-1"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 grids-feature mt-md-0 mt-4">
                    <div className="area-box">
                        <div className="icon-style">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                        <h4><a href="#feature" className="title-head">Automation</a></h4>
                        <a href="about.html" className="btn more p-0">Explore More<i
                                className="fas fa-long-arrow-alt-right ms-1"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 grids-feature mt-lg-0 mt-4">
                    <div className="area-box">
                        <div className="icon-style">
                            <i className="fas fa-layer-group"></i>
                        </div>
                        <h4><a href="#feature" className="title-head">Brand Identity</a></h4>
                        <a href="about.html" className="btn more p-0">Explore More<i
                                className="fas fa-long-arrow-alt-right ms-1"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 grids-feature mt-lg-0 mt-4">
                    <div className="area-box">
                        <div className="icon-style">
                            <i className="fas fa-chart-pie"></i>
                        </div>
                        <h4><a href="#feature" className="title-head">Mechatronics</a></h4>
                        <a href="about.html" className="btn more p-0">Explore More<i
                                className="fas fa-long-arrow-alt-right ms-1"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Offer