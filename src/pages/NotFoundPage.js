import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/NotFound.scss';


const NotFoundPage = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <Helmet >
                <title>404 Not Found</title>
                <meta name='description' content='404 Page Not Found'/>
                <meta name='keywords' content='Curly Hair, Coily Hair, Black Hair, Brown Hair, Red Hair, Blonde Hair, Wavy Hair, Straight Hair, Smooth Hair, Ethnic Hair, Multicultural Hair, Crown Act, Curls, Hairstylist, Hairdresser, Stylist, Editorial stylist, Award Winner, NAHA, Mentor' />
            </Helmet>
            
            <main>
                <div id='not-found'>
                    <h1><span className='h1'>404</span>Sorry, this page does not exist.</h1>
                    <div className='btn-wrap'>
                        <Link className="btn" to="/">Return Home</Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NotFoundPage;