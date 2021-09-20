import React from 'react';
import { Link } from 'react-scroll';
import ContactLink  from './ContactLink';

import '../styles/Header.scss';

export default function Header(props) {
    return (
        <div className='header-wrap'>
            <header>
                <h1>Michelle O'Connor</h1>
                <nav id='nav_desktop'>
                    <ul>
                        <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link></li>
                        <li><Link activeClass="active" to="press" spy={true} smooth={true} offset={0} duration={500}>Press</Link></li>
                        <li><Link activeClass="active" to="awards" spy={true} smooth={true} offset={0} duration={500}>Awards</Link></li>
                        <li><Link activeClass="active" to="portfolio-title" spy={true} smooth={true} offset={0} duration={500}>Portfolio</Link></li>
                        <li><ContactLink /></li>
                    </ul>
                </nav>
            </header>
            <div className='overlay'></div>
        </div>
    )
}