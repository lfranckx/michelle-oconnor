import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet';
import * as emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../styles/Contact.scss';


function Contact() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const [buttonState, handleButtonState] = useState('Send');
    const [buttonDisabled, handleButtonDisabled] = useState(false);
    const [message, handleMessage] = useState('');
    const history = useHistory();

    const submitForm = (values) => {
        handleButtonState('Sending...');
        const newValues = {
            email: values.email,
            message: values.message,
            name: values.name,
            phone: values.phone,
            website: values.website,
            salon: values.salon,
            reply_to: values.email
        }

        try {
            emailjs.send("service_rrj1goy", "template_lc3rglk", newValues, "user_4ZnH44kohKcJmQhnL2VGX")
            .then(res => {
                    handleButtonState('Sent');
                    handleButtonDisabled(true);
                    history.push('/thankyou');
                }
            )
        } catch (error) {
            handleMessage(error.message);
        }
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const contactFormSchema = Yup.object().shape({
        name: Yup.string().min(2, '* Name is too short').max(20, "* 20 maximum characters").required('* Required'),
        email: Yup.string().email("* This is not an email").required("* Required"),
        phone: Yup.string().matches(phoneRegExp, `* This doesn't look like a phone number`).max(10, '* Phone number is too long').required("* Required"),
        message: Yup.string().min(2, "* Message is too short").max(1000, "* 1000 maximum characters").required("* Required"),
        website: Yup.string().min(2, "* Sorry, this is too short").max(50, "* 50 maximum characters")
    })

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
                            <img src='https://michelleoconnor.s3.us-east-2.amazonaws.com/michelle.jpeg' alt='michelle' />
                        </div>
                    </div>
                    <div className='right-wrap'>
                        <h1>Get in touch</h1>
                        <Formik
                            initialValues={{ name: "", email: "", phone: "", message: "", website: "", salon: "" }} 
                            validationSchema={contactFormSchema}
                            onSubmit={submitForm}
                        >
                            <Form>
                                <div className="label">
                                    <label htmlFor="name"></label>
                                </div>
                                <div>
                                    <Field
                                        name="name"
                                        placeholder='Your Name'
                                    />
                                </div>
                                <div>
                                    <ErrorMessage component="div" className='error' name='name' />
                                </div>

                                <div className="label">
                                    <label htmlFor="email"></label>
                                </div>
                                <div>
                                    <Field
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <ErrorMessage component="div" className='error' name='email' />
                                </div>

                                <div className="label">
                                    <label htmlFor="phone"></label>
                                </div>
                                <div>
                                    <Field
                                        name="phone"
                                        placeholder='Your Phone Number'
                                    />
                                </div>
                                <div>
                                    <ErrorMessage component="div" className='error' name='phone' />
                                </div>

                                <div className="label">
                                    <label htmlFor="website"></label>
                                </div>
                                <div>
                                    <Field
                                        name="website"
                                        placeholder='Your Website or Instagram'
                                    />
                                </div>
                                <div>
                                    <ErrorMessage component="div" className='error' name='website' />
                                </div>

                                <div className="label">
                                    <label htmlFor="message"></label>
                                </div>

                                <div>
                                    <Field 
                                        as="textarea"
                                        name='message' 
                                        rows='10' 
                                        placeholder="Describe how you would like to work with us"
                                    />
                                </div>
                                <div>
                                    <ErrorMessage component="div" className='error' name='message' />
                                </div>
                                
                                <button className="btn" type="submit" disabled={buttonDisabled}>
                                    {buttonState}
                                </button>
                            </Form>
                        </Formik>

                        {message && <div className='message'>{message}</div>}
                    </div>
                </section>
            </main>
        </>
    );
}
export default Contact;
