import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/images/kts.png';
import './Header.css';
import { Button } from './Button';
import { IconContext } from 'react-icons/lib';
import { FaFacebookF, FaTwitter} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import {  ImLinkedin2 } from 'react-icons/im';
import { IoLogoGithub, IoMdFingerPrint } from 'react-icons/io';





const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu =() => setClick(false)

  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false)
    } else {
      setButton(true)
    }
  };

  window.addEventListener('resize', showButton);

  return (

    <div className='fixed-top'>
      <IconContext.Provider value={{ color: '#fff' }}>
      <header  className="header">
    
        <div className="navbar">      

        <Link to="/"><img src={ Logo } className="pix" /></Link>
         

        <div className='menu-icon' onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</div>  

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          
                   
                    <li className="nav-item"> <Link to="/" className='nav-links'  onClick={closeMobileMenu}>Home</Link></li> 
                  
                    <li className="nav-item"> <Link to="/About"  className='nav-links' onClick={closeMobileMenu}>About</Link></li>

                    <li className="nav-item"> <Link to="/Services"  className='nav-links' onClick={closeMobileMenu}>Services</Link></li>
                                  
                
                 
                    <li className="nav-item"><Link to="/Contact"  className='nav-links' onClick={closeMobileMenu}>Contact</Link></li> 

                    {/*  
                    <li className="nav-btn">
                    {button ? 
                    (<Link to="/Signup" className="btn-link" onClick={closeMobileMenu}>
                        <Button buttonStyle='btn--outline'>SIGN UP</Button>
                    </Link>
                    ): (<Link to="/Signup" className="btn-link" onClick={closeMobileMenu}>
                          <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Sign up

                          </Button>
                    </Link>)} 
                    </li>
                    */}

          </ul>
          
               
                
         
                   
        </div>
        <marquee className="marq">We Offer the best @  Ketanech Technology Services</marquee>   
      </header>
      </IconContext.Provider>
    </div>

  )
}

export default Header


