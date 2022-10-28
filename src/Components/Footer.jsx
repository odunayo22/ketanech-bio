import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer-w3ls text-center py-5">
        <div className="container pt-4">
            <div className="mx-auto" 
            style={{maxWidth: 600 + 'px'}}>
               
                <p className="mt-4 text-white">Ketanech Technology Services is ready to work with any related company with or without supervision..</p>
                <div className="social-icons-main mt-4 pb-3">
                    <ul className="social-icons3">
                        <li>
                            <a href="#facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#linkedinin">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#dribbble">
                                <i className="fab fa-dribbble"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        
            <p className="copy-right-w3 text-white mt-5 pt-4">© 2022 Profile. All rights reserved | Design by
                <a href="http://ketanech.com" target="_blank"> kts.</a>
            </p>
        </div>
    </footer>
    </div>
  )
}

export default Footer