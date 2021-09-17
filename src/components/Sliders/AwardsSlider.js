import React, { useState } from 'react';
import { AwardsData } from './AwardsData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const AwardsSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0  ? length - 1 : current - 1)
    }

    // if no data or is not an array return null
    if (!Array.isArray(slides) || slides.length <= 0) {
        return (
            <>
                <div className='awards_slider'>
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> 
                </div>
            </>
        )
    }

    return (
        <>
            <div className='awards_slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {AwardsData.map((img, index) => {
                    return ( 
                        <div className='slides-wrap'>
                            <div className={index === current ? 'slide active' : 'slide'} key={index} >
                                {index === current && (<img src={img.src} alt={`awards image ${index}`} width='500px'/>)}
                            </div>
                        </div>
                    
                    );
                })}
            </div>
        </>
    )
}

export default AwardsSlider
