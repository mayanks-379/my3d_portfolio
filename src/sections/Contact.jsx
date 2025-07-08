import React, { useState } from 'react'
import { TitleHeader } from '../components/TitleHeader'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


export const Contact = () => {

    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
                
            )
            setFormData({
                name: '',
                email: '',
                message: '' });
        } 
        catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        }
        finally{
            setLoading(false);
        }
    };


    return (
    <section id='contact' className='flex-center section-padding'>
    <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader 
        title="Get In Touch With Me"
        sub="✉️Contact Information"
        />


       <div className='mt-16 grid-12-cols'>
        <div className='xl:col-span-13'>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className='mb-6'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name' 
                        placeholder='Your Name'
                        onChange={handleChange}
                        required/>
                </div>

                <div className='mb-6'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' 
                        id='enail' 
                        name='email' 
                        placeholder='Your email address'
                        onChange={handleChange}
                        required/>
                </div>

                <div className='mb-6'>
                    <label htmlFor='message'>Message</label>
                    <textarea 
                        id='message' 
                        name='message' 
                        rows='5' 
                        placeholder='Your Message'
                        value={formData.message}
                        onChange={handleChange}
                        required></textarea>
                </div>

                <button type='submit' disabled={loading} >
                    <div className='cta-button group'>
                        <p className='text'>{loading ? 'Send Message....' : 'Send Message'}</p>
                    </div>
                    
                </button>
            </form>
        </div>
       </div>



        <div className='mt-16'>
            <p className='text-center'>
                Feel Free to reach out !
            </p>
        </div>
    </div>
    </section>
  )
}
