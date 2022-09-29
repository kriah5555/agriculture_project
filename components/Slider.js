import React, {useState} from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import data from '../utils/data'


export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className='slider'>
      <AiOutlineArrowLeft className="arrow prev"/>
      <AiOutlineArrowRight className="arrow next"/>
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
