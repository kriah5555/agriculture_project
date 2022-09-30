import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import data from '../utils/data'


export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = data.sildeData.length;
  // slideLength = 1 2 3 4 
  // currentSlide = 0 1 2

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 4000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength -1 ? 0 :  currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength -1 :  currentSlide - 1);
  };

  function auto () {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide]);


  return (
    <div className='slider'>
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>
      <div>
      </div>
      {data.sildeData.map((slide, index) => {
        return (
          <>
          <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt={slide.image}/>
                <div className='content'>
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr></hr>
                  <button className='--btn.--btn-primary'>Get started</button>
                </div>
              </div>
            )}
          </div>
          </>
        )
      })}
    </div>
  )
}
