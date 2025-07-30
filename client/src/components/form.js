
// import './App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import login from './login';

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here

      localStorage.setItem('username', formData.username);
      localStorage.setItem('mail', formData.email);

      navigate('/setpass');

    } else {
      console.log('Form submission failed due to validation errors.');
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = 'Username is required';
    } else if (data.username.length < 4) {
      errors.username = 'Username must be at least 4 characters long';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }


    return errors;
  };

  return (

    <form onSubmit={handleSubmit}>
      <p class="text-xl italic font-serif text-pink-500">Hello Todoers..!</p>
      <div class="flex justify-center" className="form-group">
        <label class="p-3 font-serif italic font-bold text-blue-500">
          Email <input name="email" type="email" value={formData.email} onChange={handleChange} class="mb-1 email border border-red-500 font-sans font-normal text-black ml-9" />
        </label>
        <br></br>
        {errors.email && (
          <span className="error-message" class="text-red-600">
            {errors.email}
          </span>
        )}
      </div>
      <div class="flex justify-center" className="form-group">
        <label class="p-3 font-serif italic font-bold text-blue-500">
          Username <input name="username" type="text" value={formData.username} onChange={handleChange} class="mb-1 username border border-red-500 font-sans font-normal text-black" />
        </label>
        <br></br>
        {errors.username && (
          <span className="error-message" class="text-red-600">
            {errors.username}
          </span>
        )}
      </div>
      <button type="submit" class="text-red-50 p-2 rounded-md borde-2 border-indigo-500 bg-indigo-500 hover:bg-green-600">Sign up</button>
    </form>

  );
}

export default Form;
