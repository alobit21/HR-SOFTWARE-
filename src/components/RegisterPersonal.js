import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const passwordRules = [
      /[A-Z]/, // At least one uppercase letter
      /[a-z]/, // At least one lowercase letter
      /[0-9]/, // At least one digit
      /[^A-Za-z0-9]/, // At least one special character
      /.{8,}/, // At least 8 characters
    ];
    
    const errors = [];
    if (!passwordRules[0].test(password)) errors.push('One uppercase letter required');
    if (!passwordRules[1].test(password)) errors.push('One lowercase letter required');
    if (!passwordRules[2].test(password)) errors.push('One digit required');
    if (!passwordRules[3].test(password)) errors.push('One special character required');
    if (!passwordRules[4].test(password)) errors.push('At least 8 characters required');

    return errors.length ? errors.join(', ') : '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim input values
    const trimmedData = {
      ...formData,
      firstname: formData.firstname.trim(),
      lastname: formData.lastname.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
      confirmPassword: formData.confirmPassword.trim(),
    };

    // Password validation
    const passwordError = validatePassword(trimmedData.password);
    if (passwordError) {
      setErrors({ password: passwordError });
      return;
    }

    // Check if passwords match
    if (trimmedData.password !== trimmedData.confirmPassword) {
      setErrors({ password: 'Passwords do not match' });
      return;
    }

    // Clear errors
    setErrors({});

    // Navigate to the next registration details page
    navigate('/next-registration-details');
  };

  const backgroundImageStyle = {
    backgroundImage: 'url(/images/phone.PNG)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%'
    
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here
  };
  return (
    <div style={backgroundImageStyle} className="flex justify-center items-center h-screen ">
      <div className="w-full max-w-md p-8 mt-10 backdrop-blur-md  rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-white">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-100">First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-500 text-2xl text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-100">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="mt-1 block w-full px-3  bg-gray-500 py-2  text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-100">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2  bg-gray-500  text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-100">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2  bg-gray-500  text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-100">Confirm Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2  bg-gray-500  text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="showPassword" className="ml-2 block text-sm text-gray-400">
              Show Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
