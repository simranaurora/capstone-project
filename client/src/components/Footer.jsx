import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../icons/facebook.png';
import twitterIcon from '../icons/twitter.png';
import instagramIcon from '../icons/instragram.jpeg';

const Footer = () => {
    return (
        <footer className='bg-slate-300 shadow'>
            <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
                <div>
                    <h3 className='font-bold'>Quick Links</h3>
                    <ul>
                        <li><Link to='/properties' className='text-slate-600 hover:underline'>Properties</Link></li>
                        <li><Link to='/services' className='text-slate-600 hover:underline'>Services</Link></li>
                        <li><Link to='/contact' className='text-slate-600 hover:underline'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold'>Contact Us</h3>
                    <p className='text-slate-600'>50 Wellington Drive</p>
                    <p className='text-slate-600'> Eco Real Estate, ERE 12345</p>
                    <p className='text-slate-600'>Phone: (123) 456-7890</p>
                    <p className='text-slate-600'>Email: info@ecorealestate.com</p>
                </div>
                <div>
                    <h3 className='font-bold'>Follow Us</h3>
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
            <div className='text-center text-slate-600 text-sm mt-4 font-bold'>
                © 2024 Eco RealEstate. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
