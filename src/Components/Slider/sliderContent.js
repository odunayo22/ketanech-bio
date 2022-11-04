import React from 'react'

import imageSlider from './imageSlide';



function SliderContent  ({ activeIndex, products})  {
  return (

      <section>
          
          {imageSlider?.map((slide, index) =>
         
          <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>  
             <div className="scrolling">  
             <img className="slide-quote" src={slide.quote} alt="" />
              <h5 className="slide-description"> {slide.description}</h5>
              <p className="slide-name">{slide.name}</p>
              <p className="slide-para">{slide.para}</p>
            
            </div>
              <img className="slide-image" src={slide.urls} alt="" />
              </div>
             
          )}
          </section>
        );
        }
          


export default SliderContent;