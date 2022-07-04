import React, { useState } from 'react'
import { SliderData } from './SliderData'
import RightArrow from '../Icons/square-caret-right-solid.svg'
import LeftArrow from '../Icons/square-caret-left-solid.svg'
import '../Slider/Slider.css'
const ImageSlider = ({slides}) => {
    const[current,setCurrent]=useState(0);
    const length=slides.length;
    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    }
    const NextSlide = () =>{
        setCurrent(current=== length-1 ? 0 : current+1)
    }
    const PrevSlide = () =>{
        setCurrent( current===0 ? length-1 : current-1)
    }
  return (
    <section className='slider'>
    <img className='left-arrow' onClick={PrevSlide}src={LeftArrow} alt="" />
    <img className='right-arrow' onClick={NextSlide} src={RightArrow} alt="" />
    {SliderData.map((slide, index)=>{
        return(
            <div className= {index ===current ? 'slide active' : 'slide'} key={index}>
                {index ===current && (<img src ={slide.image} alt="" className='image'/>
)}
            </div>
        )
    })}
    </section>
    
  )
}

export default ImageSlider