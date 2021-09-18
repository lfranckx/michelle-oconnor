import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import '../styles/NotFound.scss';


const NotFoundPage = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <Helmet >
                <title>404 Not Found</title>
                <meta name='description' content='404 Page Not Found'/>
                <meta name='keywords' content='Hair, Hair Color, Highlights, Hair Stylist' />
            </Helmet>
            
            <main>
                <div id='not-found-page'>
                    <h1><span>404</span>Oops! The page you are looking for does not exist.</h1>
                    <div>
                        <Link className="btn-big" to="/">Return Home</Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NotFoundPage;