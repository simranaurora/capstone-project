import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData] = useState({
    email: '',
    password: '',
  });
 
  return (
    <div >
      <h1 className='text-4xl text-center font-bold mb-6'>Sign In</h1>
      <form className='flex flex-col gap-5'>
        <input
          type='email'
          placeholder='Email'
         
          id='email'
        
        />
        <input
          type='password'
          placeholder='Password'
         
          id='password'
         
        />
        <button type='submit'> Submit
          
        </button>
       
      </form>
      <div >
        <p>Don't have an account?</p>
        <Link to='/signup'>
          <span className='text-cyan-700 font-bold hover:underline'>Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
