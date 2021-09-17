import React, { useState } from 'react';
import { AwardsData } from './AwardsData';

const AwardsSlider = () => {
    const [current, setCurrent] = useState[0];
    // const length = slides.length;

    return (
        <>
            <div>
                {AwardsData.map((img, index) => {
                    return <img src={img.src} alt={`awards image ${index}`} key={index} width='500px'/>;
                })}
            </div>
        </>
    )
}

export default AwardsSlider
