// src/pages/Signup.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'follower' // default
    });

    const handleChange = e =>
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/users/signup', formData);
            alert('Signup successful!');
            navigate('/signin');
        } catch (error) {
            console.error('Signup error:', error.response?.data?.message || error.message);
            alert(error.response?.data?.message || 'Signup failed.');
        }
    };

    return (
        <div className='box'>
            <h2>Sign Up</h2>
            <form className='form-group' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /><br />

                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="follower">Follower</option>
                    <option value="creator">Creator</option>
                </select><br />

                <button className='btn' type="submit">Sign Up</button>
            </form>

            <p style={{ marginTop: '1rem' }}>
                Already have an account?{' '}
                <Link to="/signin" style={{ color: '#38BDF8' }}>
                    Sign In
                </Link>
            </p>
        </div>
    );
};

export default Signup;
