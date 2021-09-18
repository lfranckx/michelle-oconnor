import React from 'react';
import '../styles/Portfolio.scss';
import PortfolioSlider from './Sliders/PortfolioSlider';
import { PortfolioData } from './Sliders/PortfolioData';

export default function Portfolio() {
    return (
        <>
            <section id='portfolio'>
                <h2 id='portfolio-title'>Portfolio</h2>
                <PortfolioSlider data={PortfolioData} />
            </section>
        </>
    )
}