import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const url = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:3000';
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch(`${url}/api/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setMessage(data.message);
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    setLoading(true);
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${url}/api/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, newPassword }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className='p-5 max-w-md mx-auto bg-white shadow-lg rounded-lg'>
        <h1 className='text-4xl text-center font-bold mb-6'>Forgot Password</h1>
        {message && <p className='text-green-500 text-center'>{message}</p>}
        {error && <p className='text-red-500 text-center'>{error}</p>}
        {!message && (
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <input
              type='text'
              placeholder='Username'
              className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              type='submit'
              disabled={loading}
              className='bg-cyan-700 text-white p-3 rounded-lg uppercase hover:bg-cyan-800 disabled:opacity-50'
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
        {message && (
          <form onSubmit={handleResetPassword} className='flex flex-col gap-5'>
            <input
              type='password'
              placeholder='New Password'
              className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type='password'
              placeholder='Confirm Password'
              className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type='submit'
              disabled={loading}
              className='bg-cyan-700 text-white p-3 rounded-lg uppercase hover:bg-cyan-800 disabled:opacity-50'
            >
              {loading ? 'Submitting...' : 'Reset Password'}
            </button>
          </form>
        )}
        <div className='flex justify-center gap-2 mt-4'>
          <Link to='/signin'>
            <span className='text-cyan-700 font-bold hover:underline'>Back to Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
