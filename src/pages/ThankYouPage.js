import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { Helmet } from 'react-helmet';

export default function ThankYou() {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
        <>
            <Helmet >
                <title>Thank You</title>
                <meta name='description' content='Thank you for contacting us'/>
                <meta name='keywords' content='Curly Hair, Coily Hair, Black Hair, Brown Hair, Red Hair, Blonde Hair, Wavy Hair, Straight Hair, Smooth Hair, Ethnic Hair, Multicultural Hair, Crown Act, Curls, Hairstylist, Hairdresser, Stylist, Editorial stylist, Award Winner, NAHA, Mentor' />
            </Helmet>
            <main>
                <animated.div style={props} id="thankyou">
                    <h1 className='h1'>Thank you for contacting us. A member of our team will be in touch soon.</h1>
                    <Link to='/' className='btn'>Return Home</Link>
                </animated.div>
            </main>
        </>
    )
}