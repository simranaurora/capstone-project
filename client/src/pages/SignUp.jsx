import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', { // Ensure correct URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const data = await response.json();
      console.log(data);
      setSuccessMessage('User has been created');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-5 max-w-md mx-auto bg-white shadow-lg rounded-lg'>
      <h1 className='text-4xl text-center font-bold mb-6'>Create Account</h1>
      {error && <p className='text-red-500 text-center'>{error}</p>}
      {successMessage && <p className='text-green-500 text-center'>{successMessage}</p>}
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <input
          type='text'
          placeholder='Username'
          className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
          id='username'
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
          id='email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
          id='password'
          value={formData.password}
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-cyan-700 text-white p-3 rounded-lg uppercase hover:bg-cyan-800 disabled:opacity-50'
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
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
