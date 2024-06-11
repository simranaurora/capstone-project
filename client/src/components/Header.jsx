import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../icons/logoe.png'


const Header = () => {
  return (
    <header className='bg-slate-300 shadow'>
       <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
            <Link to='/' className='flex items-center'>
                <img src={logo} alt='Eco RealEstate Logo' className='w-10 h-10 mr-2' />  {/* Adjust the width and height as needed */}
                <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
                    <span className='text-cyan-800'>Eco RealEstate</span>
                </h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer font-bold'>Home</li>
                </Link>
                {/* <Link to='/about'>
                    <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer font-bold'>About</li>
                </Link> */}
                <Link to='/signup'>
                    <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer font-bold'>Sign Up</li>
                </Link>
                <Link to='/profile'>
                    <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer font-bold'>Profile</li>
                </Link>
                <Link to='/contact'>
                    <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer font-bold'>Contact Us</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header
