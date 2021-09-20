import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { RiRestartFill } from 'react-icons/ri';


function Cards() {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    const [current, setCurrent] = useState(0);

    const nextText = () => {
        setCurrent(current === text.length - 1 ? 0 : current + 1);
    }

    const prevText = () => {
        setCurrent(current === 0 ? 0  : current - 1);
    }

    const text = [
        `Michelle O'Connor is a five-time NAHA-winning hairstylist, trailblazer, influencer, educator, Matrix global artistic director, and an emerging voice on diversity and inclusion within the beauty industry.`, 
        `Michelle began her hair career in Ft. Lauderdale in 2000, working for the prestigious Paul Triana Salon. There she honed her skills in cutting, coloring, and styling, equipping her with an incredible experience with textured and non-textured hair. She quickly became an in-demand freelance hairstylist, working for clients including Victoria’s Secret and J.Crew, and at New York Fashion Week.`,
        `With the Mizani education team, she flexed entrepreneurial skills to open a small boutique salon and expand her editorial and session work on set for music videos, commercials, and catalogs. From there, she moved into the role of Creative Director for The Salon by InStyle at JCPenney. Most recently, in addition to her education role with Matrix, O'Connor consulted with marketing and leadership teams for various hair care and beauty brands, including Dyson and Kerastase.`,
        `O'Connor brings all of this varied experience and accolades to the new role as a member of the Ulta Pro Beauty team and will make a marked impact. Throughout her career, she’s been honored with five North American Hairstyling Awards (NAHA) in texture, editorial, Avant-garde, and styling and finishing categories.`
    ]

    return (
        <>
            <animated.div style={props} className="text-wrap">
                {text.map((text, i) => {
                    return (<p className={i === current ? 'text active' : 'text'} key={i}>{i === current && text}</p>)
                })}
            </animated.div>
            <FaArrowAltCircleLeft className={current > 0 ? 'left-arrow arrow active' : 'opacity-0 left-arrow arrow'} onClick={prevText} />
            <FaArrowAltCircleRight className={current < 3 ? 'right-arrow arrow active' : 'hidden right-arrow arrow' } onClick={nextText} />
            <RiRestartFill id='restart' className={current === 3 ? 'right-arrow arrow active' : 'hidden right-arrow arrow' } onClick={nextText} />
        </>
    );
}

export default Cards;