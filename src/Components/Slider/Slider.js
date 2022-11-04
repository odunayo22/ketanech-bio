import React,  { useEffect, useState } from 'react';
import './Slider.css';
import imageSlider from './imageSlide';
import SliderContent from './sliderContent';
import Arrow from './Arrow';

const len = imageSlider.length - 1;

function Slider(props)  {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 4000);
        return () => clearInterval(interval);

    }, [activeIndex]);


  return (
    <div>

<div className="slider-container pictures">
        <SliderContent activeIndex={activeIndex} imageSlider="{imageSlider}" />
        <Arrow
            prevSlide={() =>
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
        />
       
    </div>

    </div>
  )
}

export default Slider;

     {/*
    <section className="w3l-testimonials py-5" id="testimonials">
        <div className="container py-md-5 py-4">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="owl-two owl-carousel owl-theme">
                        <div className="item">
                            <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <img src="assets/images/quote.png" alt="" className="img-fluid mb-2" />
                                    <p><q>The number one CEO at Ketanech Technology Services.</q></p>
                                    <div className="name mt-4 mb-4">
                                        <h4>Engineer Babalola Bukola</h4>
                                        <p>Electrical Electronics Engineer</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src="assets/images/ceo-2.jpg" className="img-fluid radius-image" alt="client" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <img src="assets/images/quote.png" alt="" className="img-fluid mb-2" />
                                    <p><q>The Supervising Manager at Ketanech Technology Services.</q></p>
                                    <div className="name mt-4 mb-4">
                                        <h4>Mr Taiwo</h4>
                                        <p>Manager</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src="assets/images/Mr-T.jpg" className="img-fluid radius-image" alt="client" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <img src="assets/images/quote.png" alt="" className="img-fluid mb-2" />
                                    <p><q>Our Pretty Programmer.</q></p>
                                    <div className="name mt-4 mb-4">
                                        <h4>Odun Babs</h4>
                                        <p>Software Developer</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src="assets/images/odun-33.png" className="img-fluid radius-image" alt="client" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-info mt-lg-4 mt-3">
                                <div className="message">
                                    <img src="assets/images/quote.png" alt="" className="img-fluid mb-2" />
                                    <p><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id
                                            accusantium<br />
                                            officia quod quasi necessitatibus perspiciatis Harum error provident<br />
                                            quibusdam tenetur.</q></p>
                                    <div className="name mt-4 mb-4">
                                        <h4>Babalola Odun</h4>
                                        <p>Supervisor</p>
                                    </div>
                                </div>
                                <div className="img-circle">
                                    <img src="assets/images/odun-333.png" className="img-fluid radius-image" alt="client" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section> */}
   
  