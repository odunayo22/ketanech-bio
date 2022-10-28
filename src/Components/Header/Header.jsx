import React from 'react'
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header id="site-header" className="fixed-top">
        <div className="container">
        
            <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/"> {" "}<img className="pix" src="assets/images/kts.png"/></Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">

                        <Link to="/">
                            {" "}
                        <li className="nav-item">
                        Home
                            
                        </li></Link>

                        <Link to="/about">
                            {" "}
                        <li className="nav-item nav-link">
                       About
                            
                        </li></Link>

                        <Link to="/services">
                            {" "}
                        <li className="nav-item">
                      Services</li></Link>

                        <Link to="/contact">
                        <li className="nav-item">
                        Contact</li></Link>
                    </ul>
                   
                </div>
               {/*  toggle switch for light and dark theme */}
                <div className="cont-ser-position">
                    <nav className="navigation">
                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" htmlFor="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div className="mode-container">
                                    <i className="gg-sun"></i>
                                    <i className="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
                {/* //toggle switch for light and dark theme*/}
            </nav>
        </div>
    </header>

  )
}

export default Header