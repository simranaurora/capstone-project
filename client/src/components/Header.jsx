import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='bg-slate-300 shadow'>
        <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
                    <span className='text-cyan-800'>Eco RealEstate</span>    
                </h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer font-bold'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer font-bold'>About</li>
                </Link>
                <Link to='/signin'>
                    <li className='hidden sm:inline text-slate-600 hover:underline cursor-pointer font-bold'>Sign In</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header
