import React from 'react';
import '../styles/About.scss';
import Cards from './Cards';

export default function About(props) {
    return (
        <>
            <section id='about'>
                <h2>About</h2>
                <div className='wrap'>
                    <div className='img-wrap'>
                        <img src='/images/michelle.jpeg' alt='michelle oconnnor'/>
                    </div>
                    <div className='cards-wrap'>
                        <Cards />
                    </div>
                </div>
            </section>
        </>
    )
}