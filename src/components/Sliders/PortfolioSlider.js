import React, { useState } from 'react';
import { PortfolioData } from './PortfolioData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const PortfolioSlider = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [collectionIndex, setCollectionIndex] = useState(0);
    const [currentCollection, setCurrentCollection] = useState(data[collectionIndex]);
    const [prevCollectionIndex, setPrevCollectionIndex] = useState(7);
    const [prevCollection, setPrevCollection] = useState(data[prevCollectionIndex]);

    console.log('current slide', currentSlide);
    console.log('current collection index', collectionIndex);
    console.log(`collection:`, currentCollection);
    console.log(`prev collection index`, prevCollectionIndex);
    console.log(`prev collection`, prevCollection);

    const nextSlide = () => {
        // if current slide is equal to current collection length go to next collection
        if (currentSlide === currentCollection.length - 1) {
            // if current collection index is equal to current collection length revert collection back to 0
            setCollectionIndex(collectionIndex === data.length - 1 ? 0 : collectionIndex + 1);
            setCurrentCollection(currentCollection === data[7] ? data[0] : data[collectionIndex + 1]);
        } 
        setCurrentSlide(currentSlide === currentCollection.length - 1 ? 0 : currentSlide + 1);
    }

    const settiingPrevCollection = () => {
        console.log('running setPrevcollection');

    }

    const prevSlide = () => {

        if (currentSlide === 0) {
            setCollectionIndex(collectionIndex === 0 ? 7 : collectionIndex - 1);
            setCurrentCollection(currentCollection === data[0] ? data[7] : data[collectionIndex - 1]);

            setPrevCollectionIndex(prevCollectionIndex === 0 ? 7 : prevCollectionIndex - 1);
            setPrevCollection(prevCollection === data[0] ? data[7] : data[prevCollectionIndex - 1]);

            setCurrentSlide(currentSlide === 0  ? prevCollection.length - 1 : currentSlide - 1);

        } else {
            setCurrentSlide(currentSlide === 0  ? prevCollection.length - 1 : currentSlide - 1);
        }
    }

    if (!Array.isArray(data) || data.length <= 0) {
        return (
            <>
                <div className='portfolio_slider'>
                    <FaArrowAltCircleLeft className='left-arrow arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow arrow' onClick={nextSlide} /> 
                </div>
            </>
        );
    }

    return (
        <div id='portfolio_slider'>
            <FaArrowAltCircleLeft className='left-arrow arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow arrow' onClick={nextSlide} />

            {currentCollection.map((img, i) => {
                return (
                    <div className='slide-wrap'  key={i}>
                        <div className={i === currentSlide ? 'slide active' : 'slide'}>
                            {i === currentSlide && (<img src={img.src} alt={img.alt} width='400px'/>)}
                        </div>
                    </div>
                );
            })}

            {PortfolioData.map((collection, i) => {
                return (
                    <>
                        {i === collectionIndex && (<div className='bottom-que' key={i}>
                            {collection.map((img, i) => {
                                return (
                                    <div className='que-wrap' key={i}>
                                        <div className={i === currentSlide ? 'slide active' : 'slide'}>
                                            {i === currentSlide && (<img src={img.src} alt={img.alt} width='100px' />)}
                                        </div>
                                        <div className={'slide-que'}>
                                            {i !== currentSlide && (<img src={img.src} alt={img.alt} width='100px' />)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>)}
                    </>
                );
            })}
        </div>
    )
}

export default PortfolioSlider;