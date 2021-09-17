import React from 'react';
import { AwardsData } from './AwardsData';

const AwardsSlider = () => {
    return (
        <>
            <div>
                {AwardsData.map((img, index) => {
                    return <img src={img.src} alt={`awards image ${index}`} key={index} width='500px'/>
                })}
            </div>
        </>
    )
}

export default AwardsSlider
