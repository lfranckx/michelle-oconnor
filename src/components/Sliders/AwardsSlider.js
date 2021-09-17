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

    console.log('current', current);
    return (
        <>
            <div className='awards_slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {AwardsData.map((img, index) => {
                    if (current === 0) {
                        return (
                            <div className='slides-wrap' key={index} >
                                <div className={'slide-que left-que'}>
                                    { index === length - 1  && (<img src={img.src} alt={img.alt} width='500px'/>)}
                                </div>
                                <div className={index === current ? 'slide active' : 'slide'}>
                                    {index === current && (<img src={img.src} alt={img.alt} width='500px'/>)}
                                </div>
                                <div className={'slide-que right-que'}>
                                    {index === current + 1  && (<img src={img.src} alt={img.alt} width='500px'/>)}
                                </div>
                            </div>
                        )
                    }

                    if (current === length - 1) {
                        return ( 
                            <div className='slides-wrap' key={index} >
                                <div className={'slide-que left-que'}>
                                    { index === current - 1  && (<img src={img.src} alt={img.alt} width='500px'/>)}
                                </div>
                                <div className={index === current ? 'slide active' : 'slide'}>
                                    {index === current && (<img src={img.src} alt={img.alt} width='500px'/>)}
                                </div>
                                <div className={'slide-que right-que'}>
                                    {index === 0  && (<img src={img.src} alt={img.alt} width='500px'/>)}
                                </div>
                            </div>
                        
                        );
                    }

                    return ( 
                        <div className='slides-wrap' key={index} >
                            <div className={'slide-que left-que'}>
                                { index === current - 1  && (<img src={img.src} alt={img.alt} width='500px'/>)}
                            </div>
                            <div className={index === current ? 'slide active' : 'slide'}>
                                {index === current && (<img src={img.src} alt={img.alt} width='500px'/>)}
                            </div>
                            <div className={'slide-que right-que'}>
                                {index === current + 1  && (<img src={img.src} alt={img.alt} width='500px'/>)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default AwardsSlider
