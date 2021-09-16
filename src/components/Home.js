import React from 'react';
import '../styles/Home.scss'

export default function Home(props) {
    return (
    <>
        <div className='header-wrap'>
            <header>
                <h1>Michelle O'Connor</h1>
                <nav>
                    <ul>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Press</a></li>
                        <li><a href='/'>Awards</a></li>
                        <li><a href='/'>Portfolio</a></li>
                    </ul>
                </nav>
            </header>
            <div className='overlay'></div>
        </div>
        
    </>
    )
}