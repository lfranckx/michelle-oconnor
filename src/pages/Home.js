import React, { useEffect } from 'react';

import Header from '../components/Header.js';
import About from '../components/About';
import Press from '../components/Press';
import Awards from '../components/Awards';
import Portfolio from '../components/Portfolio';

export default function Home(props) {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

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