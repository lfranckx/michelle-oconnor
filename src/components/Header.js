import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

export default function Header(props) {
    return (
        <div className='header-wrap'>
            <header>
                <h1>Michelle O'Connor</h1>
                <nav>
                    <ul>
                        <li><button>About</button></li>
                        <li><button>Press</button></li>
                        <li><button>Awards</button></li>
                        <li><button>Portfolio</button></li>
                        <li><Link to='/'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <div className='overlay'></div>
        </div>
    )
}