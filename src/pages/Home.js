import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

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
        <Helmet >
            <title>Michelle O'Connor</title>
            <meta name='description' content='Get in touch with myself and my team'/>
            <meta name='keywords' content='Curly Hair, Coily Hair, Black Hair, Brown Hair, Red Hair, Blonde Hair, Wavy Hair, Straight Hair, Smooth Hair, Ethnic Hair, Multicultural Hair, Crown Act, Curls, Hairstylist, Hairdresser, Stylist, Editorial stylist, Award Winner, NAHA, Mentor' />
        </Helmet>
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