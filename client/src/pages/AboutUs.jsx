import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-4xl font-bold text-center text-cyan-800 mb-6">
                About Us
            </h1>
            <div className="space-y-6">
                <p className="text-lg text-gray-700">
                    Welcome to Eco Real Estate! We are a leading real estate company based in Ontario, committed to providing top-notch real estate services to our valued clients. Our mission is to help you find your dream home and make the process as smooth and enjoyable as possible.
                </p>
                <p className="text-lg text-gray-700">
                    With years of experience in the real estate industry, we pride ourselves on our extensive knowledge of the local market and our dedication to customer satisfaction. Whether you are looking to buy, sell, or rent a property, our team of expert agents is here to assist you every step of the way.
                </p>
                <h2 className="text-2xl font-bold text-cyan-800 mt-4">
                    Our Services
                </h2>
                <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Residential Sales and Leasing</li>
                    <li>Commercial Sales and Leasing</li>
                    <li>Property Management</li>
                    <li>Real Estate Consulting</li>
                </ul>
                <h2 className="text-2xl font-bold text-cyan-800 mt-4">
                    Why Choose Us?
                </h2>
                <p className="text-lg text-gray-700">
                    At Eco Real Estate, we believe in building long-lasting relationships with our clients. Here are some reasons why you should choose us for your real estate needs:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Experienced and knowledgeable agents</li>
                    <li>Personalized service tailored to your needs</li>
                    <li>Comprehensive market analysis</li>
                    <li>Strong negotiation skills</li>
                    <li>Commitment to transparency and honesty</li>
                </ul>
                <p className="text-lg text-gray-700">
                    Thank you for considering Eco Real Estate. We look forward to working with you and helping you achieve your real estate goals!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
