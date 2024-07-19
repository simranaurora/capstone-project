import React, { useState } from 'react';

const ContactUs = () => {
    const url = process.env.FRONTEND_URL || 'http://localhost:3000';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${url}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('Your request has been submitted successfully!');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setSuccessMessage(data.message || 'There was an error submitting your request.');
            }
        } catch (error) {
            console.error(error);
            setSuccessMessage('There was an error submitting your request.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
            <div className="mb-6">
                <h3 className="font-bold mb-2">Contact Information</h3>
                <p className="text-gray-600">50 Wellington Drive</p>
                <p className="text-gray-600">Eco Real Estate, ERE 12345</p>
                <p className="text-gray-600">Phone: (123) 456-7890</p>
                <p className="text-gray-600">Email: info@ecorealestate.com</p>
            </div>
            <h2 className="text-xl font-semibold mb-4">Have any questions or comments?</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Send Feedback
                    </button>
                </div>
                {successMessage && (
                    <div className="mt-4 text-green-600">
                        {successMessage}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactUs;
