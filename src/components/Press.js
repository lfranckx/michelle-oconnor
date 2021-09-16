import React from 'react';
import '../styles/Press.scss';

export default function Press(props) {
    return (
        <>
            <section id='press'>
                <h2>Press</h2>
                <div className='grid'>
                    <div className='img-wrap'>
                        <a href='https://www.allure.com/story/how-to-wash-natural-hair-expert-tips'>
                            <img src='images/press/allure.png' alt='allure logo' width='160px' target='-blank' />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://www.byrdie.com/how-to-perm-hair-346267'>
                            <img src='images/press/byrdie.png' alt='byrdie logo' width='200px' target='-blank' />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://www.glam.com/culture/laverne-cox-hair-and-identity-live-your-color-campaign/'>
                            <img src='images/press/glam.png' alt='glam logo' width='120px' target='-blank' />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://hellogiggles.com/hair/hair-color/hair-colors-for-spring/'>
                            <img src='images/press/hellogiggles.png' alt='hello giggles logo' width='280px' target='-blank' />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://www.huffpost.com/entry/racial-bias-salons-black-hair_l_5e5d45fec5b63aaf8f5b199d'>
                            <img src='images/press/huffpost.png' alt='huffpost logo' width='150px' target='-blank' />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://www.instyle.com/hair/natural/the-best-hair-steamers-for-natural-hair'>
                            <img src='images/press/instyle.png' alt='in style logo' width='130px' target='-blank' />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://www.mindbodygreen.com/articles/black-hairstylists-to-follow-and-their-best-tips'>
                            <img src='images/press/mbglifestyle.png' alt='mbg lifestyle logo' width='200px' target='-blank' />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}