 import React from 'react';
 import '../styles/Footer.scss';

export default function Footer() {
    return (
        <div id='footer'>
            <footer>
                <div className='wrap'>
                    <div className='column left'>
                        <h3>Michelle O'Connor</h3>
                        <a href='https://www.instagram.com/michelleoconnorbeauty/' target='_blank'>@michelleoconnorbeauty</a>
                    </div>
                    <div className='column right'>
                    <p >Sign up to receive the latest news and stay in touch.</p>

                        <form className='subscription_capture'>
                            <div className='fieldset'>
                                <label for='name' className='hidden'>First Name</label>
                                <input type='text' id='name' placeholder='Your first name' />
                            </div>
                            <div className='fieldset'>
                                <label for='email' className='hidden'>Email</label>
                                <input type='text' id='name' placeholder='Your email' />
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='copyright_content'>
                    <h4>Manged by <span><a href='https://www.socialarthouse.com/' target='_blank'>Social Arthouse</a></span> | <span><a href=''>info@socialarthouse.com</a></span></h4>
                    <small id='copyright'>Copyright © 2021. All rights reserved.</small>
                </div>
            </footer>
        </div>
    )
}