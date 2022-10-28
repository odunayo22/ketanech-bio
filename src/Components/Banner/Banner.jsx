import React from 'react'

function Banner() {
  return (
    <div>
         <section className="w3l-banner py-5" id="home">
        <div className="container py-md-5 py-4">
            <div className="row align-items-center pt-4">
                <div className="col-md-6 banner-left pe-xl-5">
                    <h4>Ketanech Technology Services</h4>
                    <h3 className="mb-3 mt-1">Engineering Company</h3>
                    <p className="banner-sub me-md-5">We love to work with Electronics devices
                    </p>
                    <div className="d-flex align-items-center buttons-banner mt-sm-5 mt-4">
                        <a href="about.html" className="btn btn-style me-2">Hire KTS</a>
                    </div>
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </div>
        {/*<!-- animations icons -->*/}
        <div className="icon-effects-w3-1 text-right">
            <img src="assets/images/icon2.png" alt="" className="img-fluid" />
        </div>
        <div className="icon-effects-w3-2 text-right">
            <img src="assets/images/icon3.png" alt="" className="img-fluid" />
        </div>
        <div className="icon-effects-w3-3 text-right">
            <img src="assets/images/icon1.png" alt="" className="img-fluid" />
        </div>
        <div className="icon-effects-w3-4 text-right">
            <img src="assets/images/icon6.png" alt="" className="img-fluid" />
        </div>
        {/*<!-- //animations icons -->*/}
    </section>
    </div>
  )
}

export default Banner