import React from 'react';
import '../styles/Awards.scss';
import { AwardsData } from './Sliders/AwardsData';
import AwardsSlider from './Sliders/AwardsSlider';

export default function Awards() {
    return (
        <>
            <section id='awards'>
                <h2>Awards</h2>
                <AwardsSlider slides={AwardsData} />
            </section>
        </>
    )
}