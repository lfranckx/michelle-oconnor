import React from 'react';
import '../styles/About.scss';

export default function About(props) {
    return (
        <>
            <section id='about'>
                <h2>About</h2>
                <div className='wrap'>
                    <div className='img-wrap'>
                        <img src='/images/michelle.jpeg' alt='michelle oconnnor'/>
                    </div>
                    <div className='text-wrap'>
                        <p>Michelle O'Connor is a five-time NAHA-winning hairstylist, trailblazer, influencer, educator, Matrix global artistic director, and an emerging voice on diversity and inclusion within the beauty industry.</p>
                        <p>Michelle began her hair career in Ft. Lauderdale in 2000, working for the prestigious Paul Triana Salon. There she honed her skills in cutting, coloring, and styling, equipping her with an incredible experience with textured and non-textured hair. She quickly became an in-demand freelance hairstylist, working for clients including Victoria’s Secret and J.Crew, and at New York Fashion Week.</p>
                        <p>With the Mizani education team, she flexed entrepreneurial skills to open a small boutique salon and expand her editorial and session work on set for music videos, commercials, and catalogs. From there, she moved into the role of Creative Director for The Salon by InStyle at JCPenney. Most recently, in addition to her education role with Matrix, O'Connor consulted with marketing and leadership teams for various hair care and beauty brands, including Dyson and Kerastase.</p>
                        <p>O'Connor brings all of this varied experience and accolades to the new role as a member of the Ulta Pro Beauty team and will make a marked impact. Throughout her career, she’s been honored with five North American Hairstyling Awards (NAHA) in texture, editorial, Avant-garde, and styling and finishing categories.</p>
                    </div>
                </div>
            </section>
        </>
    )
}