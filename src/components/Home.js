import React from 'react';
import '../styles/Home.scss'
import About from './About';
import Press from './Press';

export default function Home(props) {
    return (
    <>
        <div className='header-wrap'>
            <header>
                <h1>Michelle O'Connor</h1>
                <nav>
                    <ul>
                        <li><button>About</button></li>
                        <li><button>Press</button></li>
                        <li><button>Awards</button></li>
                        <li><button>Portfolio</button></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div className='overlay'></div>
        </div>
        <main>
            <About />
            <Press />
        </main>
    </>
    )
}