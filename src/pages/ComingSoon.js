import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/ComingSoon.scss';


const ComingSoon = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <Helmet >
                <title>Coming Soon</title>
                <meta name='description' content='This page is coming soon'/>
                <meta name='keywords' content='Curly Hair, Coily Hair, Black Hair, Brown Hair, Red Hair, Blonde Hair, Wavy Hair, Straight Hair, Smooth Hair, Ethnic Hair, Multicultural Hair, Crown Act, Curls, Hairstylist, Hairdresser, Stylist, Editorial stylist, Award Winner, NAHA, Mentor' />
            </Helmet>
            
            <main>
                <section id='coming-soon'>
                    <h1>Coming soon!</h1>
                    <h2>In the meantime you can follow me at <span><a href='https://www.instagram.com/michelleoconnorbeauty/' target='_blank' rel='noreferrer'>@michelleoconnorbeauty</a></span></h2>
                    <div className='btn-wrap'>
                        <Link className="btn" to="/">Return Home</Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ComingSoon;