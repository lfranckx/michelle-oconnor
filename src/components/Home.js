import React from 'react';
import Header from './Header.js';
import About from './About';
import Press from './Press';
import Awards from './Awards';
import Portfolio from './Portfolio';

export default function Home(props) {
    return (
    <>
        <Header />
        <main>
            <About />
            <Press />
            <Awards />
            <Portfolio />
        </main>
    </>
    )
}