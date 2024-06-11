import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
   
    setLoading(false);
  };

  return (
    <div className='p-5 max-w-md mx-auto bg-white shadow-lg rounded-lg'>
      <h1 className='text-4xl text-center font-bold mb-6'>Create Account</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <input
          type='text'
          placeholder='Username'
        //  className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
          id='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
         // className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
         // className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
          id='password'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Confirm Password'
         // className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
          id='confirmPassword'
          onChange={handleChange}
        />
        <button
          disabled={loading}
         // className='bg-cyan-700 text-white p-3 rounded-lg uppercase hover:bg-cyan-800 disabled:opacity-50'
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        {/* Add OAuth component here if needed */}
      </form>
      <div className='flex justify-center gap-2 mt-4'>
        <p>Already have an account?</p>
        <Link to='/signin'>
          <span className='text-cyan-700 font-bold hover:underline'>Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
