import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://eco-real-estate.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const data = await response.json();
      console.log(data);
      setIsLoggedIn(true); // Set login state to true upon successful authentication
      navigate('/'); // Redirect to home page
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className='p-5 max-w-md mx-auto bg-white shadow-lg rounded-lg'>
        <h1 className='text-4xl text-center font-bold mb-6'>Sign In</h1>
        {error && <p className='text-red-500 text-center'>{error}</p>}
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
            type='password'
            placeholder='Password'
            className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
            id='password'
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type='submit'
            disabled={loading}
            className='bg-cyan-700 text-white p-3 rounded-lg uppercase hover:bg-cyan-800 disabled:opacity-50'
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <div className='flex flex-col items-center mt-4 gap-2'>
          <Link to='/forgot-password'>
            <span className='text-cyan-700 font-bold hover:underline'>Forgot Password?</span>
          </Link>
          <div className='flex gap-2'>
            <p>Don't have an account?</p>
            <Link to='/signup'>
              <span className='text-cyan-700 font-bold hover:underline'>Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
