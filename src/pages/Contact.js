import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import '../styles/Contact.scss';


function Contact() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const history = useHistory();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_rrj1goy', 'template_lc3rglk', e.target, 'user_4ZnH44kohKcJmQhnL2VGX')
            .then(res => {
                history.push('/thankyou');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Helmet >
                <title>Contact Michelle O'Connor</title>
                <meta name='description' content='Get in touch with myself and my team'/>
                <meta name='keywords' content='Curly Hair, Coily Hair, Black Hair, Brown Hair, Red Hair, Blonde Hair, Wavy Hair, Straight Hair, Smooth Hair, Ethnic Hair, Multicultural Hair, Crown Act, Curls, Hairstylist, Hairdresser, Stylist, Editorial stylist, Award Winner, NAHA, Mentor' />
            </Helmet>
            <main>
                <section className='wrap' id='contact'>
                    <div className='left-wrap'>
                        <div className='img-wrap'>
                            <img src='../images/michelle.jpeg' alt='michelle' />
                        </div>
                    </div>
                    <div className='right-wrap'>
                        <h1>Get in touch</h1>
                        <form onSubmit={sendEmail}>
                            <div className="label">
                                <label htmlFor="name"></label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Your Name'
                                />
                            </div>

                            <div className="label">
                                <label htmlFor="salon"></label>
                            </div>

                            <div className="label">
                                <label htmlFor="email"></label>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="label">
                                <label htmlFor="phone"></label>
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder='Your Phone Number'
                                />
                            </div>

                            <div className="label">
                                <label htmlFor="website"></label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="website"
                                    placeholder='Your Website or Instagram'
                                />
                            </div>

                            <div className="label">
                                <label htmlFor="message"></label>
                            </div>

                            <div>
                                <textarea 
                                    name='message' 
                                    rows='10' 
                                    placeholder="Describe how you would like to work with us"
                                />
                            </div>
                            
                            <button className="btn" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
export default Contact;
