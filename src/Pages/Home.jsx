import React from 'react';

import Banner from '../Components/Banner/Banner';
import Experience from '../Components/Experience';
import Intro from '../Components/Intro';
import Portfolio from '../Components/Portfolio';
import Project from '../Components/Project';

import Footer from '../Components/Footer';


function Home() {
  return (
    <div>
    
       
        <Banner />
        <Experience />
        <Intro />
        <Portfolio/>
        <Project />
      
        <Footer />
       
    </div>
  )
}

export default Home