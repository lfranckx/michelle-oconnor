import React from 'react';
import '../styles/Portfolio.scss';
import PortfolioSlider from './Sliders/PortfolioSlider';
import { PortfolioData } from './PortfolioData';

export default function Portfolio() {
    return (
        <>
            <section id='portfolio'>
                <h2>Portfolio</h2>
                <Portfolio slides={PortfolioData}/>
            </section>
        </>
    )
}