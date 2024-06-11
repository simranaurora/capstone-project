import React, { useState } from 'react';

const ContactUs = () => {
    const [formData] = useState({
        name: '',
        email: '',
        message: ''
    });

    
    return (
        <div>
            <h1>Contact Us</h1>
            <div>
                <h3 className='font-bold'>Contact Information</h3>
                <p className='text-slate-600'>50 Wellington Drive</p>
                <p className='text-slate-600'> Eco Real Estate, ERE 12345</p>
                <p className='text-slate-600'>Phone: (123) 456-7890</p>
                <p className='text-slate-600'>Email: info@ecorealestate.com</p>
            </div>
            <h2>Have any questions or comments?</h2>
            <form >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                       
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                       
                    />
                </div>
                <div>
                    <button type="submit">Send Feedback</button>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
