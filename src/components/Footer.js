 import React from 'react';
 import { Link } from 'react-router-dom';
 import '../styles/Footer.scss';

export default function Footer() {
    return (
        <div id='footer'>
            <footer>
                <div className='wrap'>
                    <div className='column left'>
                        <h3><Link to={'/'}>Michelle O'Connor</Link></h3>
                        <a href='https://www.instagram.com/michelleoconnorbeauty/' target='_blank' rel='noreferrer'>@michelleoconnorbeauty</a>
                    </div>
                    <div className='column right'>
                    <p >Sign up to receive the latest news and stay in touch.</p>

                        <form className='subscription_capture'>
                            <div className='fieldset'>
                                <label htmlFor='name' className='hidden'>First Name</label>
                                <input type='text' id='name' placeholder='Your first name' />
                            </div>
                            <div className='fieldset'>
                                <label htmlFor='email' className='hidden'>Email</label>
                                <input type='text' id='name' placeholder='Your email' />
                            </div>
                            <button className='btn'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='copyright_content'>
                    <h4>Managed by <span><a href='https://www.socialarthouse.com/' target='_blank' rel='noreferrer'>Social Arthouse</a></span> | <span><a href='/#'>info@socialarthouse.com</a></span></h4>
                    <small id='copyright'>Copyright © 2021. All rights reserved.</small>
                </div>
            </footer>
        </div>
    )
}