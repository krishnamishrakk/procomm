import "./Slider.css"
import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
const ImageSlider = (slides) => {
    const [first, setFirst] = useState(0);
    const length = slides.length;
    const nextSlide=()=>{
        setFirst(first === length-1 ? 0 : first + 1)
    }
    const prevSlide=()=>{
        setFirst(first === 0 ? length-1 :first-1)
    }
    console.log(first);

  
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index===first ? "slide active": "slide"} key={index}>
                    
                    {index===first && (
                    <img src={slide.image} style={{ width: "100%" }} alt="sliding images" className="image" />
                    )}
                    

                    </div>
                )
            })}

        </section>
    )
}

export default ImageSlider;
