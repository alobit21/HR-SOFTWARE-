import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons from react-icons
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const backgroundImageStyle = {
    backgroundImage: 'url(/images/phone.PNG)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '350px',
    width: '100%'
    
  };
  
  return (
    <div style={backgroundImageStyle} className="flex justify-center mt-7 items-center h-96 bg-black text-white">
      <div className="w-full max-w-md p-8 backdrop-blur-md rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border-b border-gray-700">
            <FaEnvelope className="text-gray-400 mr-3" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-white placeholder-gray-400 border-none outline-none w-full"
              required
            />
          </div>
          <div className="mb-4 flex items-center border-b border-gray-700">
            <FaLock className="text-gray-400 mr-3" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent text-white placeholder-gray-400 border-none outline-none w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
          <div>Don't hava an account 
            <Link to="/registerPersonaldata" className='underline pl-2 text-green-400'>Register</Link>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
