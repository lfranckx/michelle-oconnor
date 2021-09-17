import React, { useState } from 'react';
import { PortfolioData } from './PortfolioData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const PortfolioSlider = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [collectionIndex, setCollectionIndex] = useState(0);
    const [currentCollection, setCurrentCollection] = useState(data[collectionIndex]);

    // console.log('current slide', currentSlide);
    // console.log('collection', collectionIndex);
    // console.log(`collection:`, currentCollection);

    const nextSlide = () => {
        // if current slide is equal to current collection length go to next collection
        if (currentSlide === currentCollection.length - 1) {
            // if current collection index is equal to current collection length revert collection back to 0
            setCollectionIndex(collectionIndex === data.length - 1 ? 0 : collectionIndex + 1);
            setCurrentCollection(currentCollection === data[7] ? data[0] : data[collectionIndex + 1]);
        } 
        setCurrentSlide(currentSlide === currentCollection.length - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        // if current slide is equal to 0 revert back to last slide of previous collection
        if (currentSlide === 0) {
            setCollectionIndex(collectionIndex === 0 ? 7 : collectionIndex - 1);
            setCurrentCollection(currentCollection === data[0] ? data[7] : data[collectionIndex - 1]);
        }
        setCurrentSlide(currentSlide === 0  ? currentCollection.length - 1 : currentSlide - 1);
    }

    // if (!Array.isArray(data) || data.length <= 0) {
    //     return (
    //         <>
    //             <div className='portfolio_slider'>
    //                 <FaArrowAltCircleLeft className='left-arrow arrow' onClick={prevSlide} />
    //                 <FaArrowAltCircleRight className='right-arrow arrow' onClick={nextSlide} /> 
    //             </div>
    //         </>
    //     )
    // }

    return (
        <div className='portfolio_slider'>
            <FaArrowAltCircleLeft className='left-arrow arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow arrow' onClick={nextSlide} />
            {/* {PortfolioData.map((collection, index) => {
                <div key={index}>
                    {collection.map((img, index) => {
                        <div>
                            {index === currentSlide && (<img src={img.src} alt={img.alt} width='500px'/>)}
                        </div>  
                    })}
                </div>
            })} */}
            {currentCollection.map((img, index) => {
                console.log(img);
                console.log(img.src);
                console.log(index, currentSlide);
                {index === currentSlide && (<img src={img.src} alt={img.alt} key={index} width='500px'/>)}
            })}
        </div>
    )
}

export default PortfolioSlider
