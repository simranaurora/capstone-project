import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../icons/facebook.png';
import twitterIcon from '../icons/twitter.png';
import instagramIcon from '../icons/instragram.jpeg';

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white shadow'>
            <div className='flex justify-between items-center max-w-7xl mx-auto p-4'>
                <div>
                    <h3 className='font-bold text-xl'>Quick Links</h3>
                    <ul className='mt-2'>
                        <li><Link to='/properties' className='hover:underline'>Properties</Link></li>
                        <li><Link to='/services' className='hover:underline'>Services</Link></li>
                        <li><Link to='/contact' className='hover:underline'>Contact</Link></li>
                        <li><Link to='/about-us' className='hover:underline'>About Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-xl'>Contact Us</h3>
                    <p className='mt-2'>50 Wellington Drive</p>
                    <p>Eco Real Estate, ERE 12345</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@ecorealestate.com</p>
                </div>
                <div>
                    <h3 className='font-bold text-xl'>Follow Us</h3>
                    <div className='mt-2'>
                        <a href='http://www.facebook.com' className='mr-2'>
                            <img src={facebookIcon} alt='Facebook' className='w-6 h-6'/>
                        </a>
                        <a href='http://www.twitter.com' className='mr-2'>
                            <img src={twitterIcon} alt='Twitter' className='w-6 h-6'/>
                        </a>
                        <a href='http://www.instagram.com'>
                            <img src={instagramIcon} alt='Instagram' className='w-6 h-6'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='text-center text-sm mt-4'>
                © 2024 Eco RealEstate. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
