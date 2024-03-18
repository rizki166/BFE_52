



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = formData;
  
    try {
      const response = await fetch(`http://localhost:5000/api/v1/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        console.log('Login successful');
        setError('');
        window.location.href = '/home'; 
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Error logging in');
    }
  };
  

  return (
    <>
      <section className="flex justify-center items-center w-auto mt-28">
        <div className="w-4/12 h-96 bg-white p-12 rounded-lg">
          <h1 className="text-center text-2xl mt-0 font-bold text-yellow-800">LOGIN</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="Username" className="text-xl font-semibold text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="Username"
              value={formData.username}
              onChange={handleChange}
              className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50 rounded"
            />

            <label htmlFor="password" className="text-xl font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50 rounded"
            />

            <button type="submit" className="w-full bg-yellow-600 mt-6 h-10 rounded-xl font-bold text-xl text-white">
              SUBMIT
            </button>
          </form>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <p className="text-center mt-4">
            Belum memiliki akun ? <Link to="/register" className="text-blue-900">Register</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
