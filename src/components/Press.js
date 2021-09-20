import React from 'react';
import '../styles/Press.scss';

export default function Press(props) {
    return (
        <>
            <section id='press'>
                <h2>Press</h2>
                <div className='grid'>
                    <div className='img-wrap'>
                        <a href='https://www.allure.com/story/how-to-wash-natural-hair-expert-tips' target='_blank' rel='noreferrer' >
                            <img src='https://michelleoconnor.s3.us-east-2.amazonaws.com/press/allure.png' alt='allure logo' width='160px'  />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://www.byrdie.com/how-to-perm-hair-346267' target='_blank' rel='noreferrer' >
                            <img src='https://michelleoconnor.s3.us-east-2.amazonaws.com/press/byrdie.png' alt='byrdie logo' width='200px'  />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://www.glam.com/culture/laverne-cox-hair-and-identity-live-your-color-campaign/' target='_blank' rel='noreferrer' >
                            <img src='https://michelleoconnor.s3.us-east-2.amazonaws.com/press/glam.png' alt='glam logo' width='120px'  />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://hellogiggles.com/hair/hair-color/hair-colors-for-spring/' target='_blank' rel='noreferrer' >
                            <img src='https://michelleoconnor.s3.us-east-2.amazonaws.com/press/hellogiggles.png' alt='hello giggles logo' width='280px'  />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://www.huffpost.com/entry/racial-bias-salons-black-hair_l_5e5d45fec5b63aaf8f5b199d' target='_blank' rel='noreferrer' >
                            <img src='https://michelleoconnor.s3.us-east-2.amazonaws.com/press/huffpost.png' alt='huffpost logo' width='150px'  />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://www.instyle.com/hair/natural/the-best-hair-steamers-for-natural-hair' target='_blank' rel='noreferrer' >
                            <img src='https://michelleoconnor.s3.us-east-2.amazonaws.com/press/instyle.png' alt='in style logo' width='130px'  />
                        </a>
                    </div>
                    <div className='img-wrap'>
                        <a href='https://www.mindbodygreen.com/articles/black-hairstylists-to-follow-and-their-best-tips' target='_blank' rel='noreferrer' >
                            <img src='https://michelleoconnor.s3.us-east-2.amazonaws.com/press/mbglifestyle.png' alt='mbg lifestyle logo' width='200px'  />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}