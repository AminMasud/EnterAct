// src/pages/Signin.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:3001/api/users/login', formData);

            // save user to localStorage
            localStorage.setItem('user', JSON.stringify(data.user));
            alert('Login successful!');
            navigate('/'); // go to homepage (or wherever you like)
        } catch (error) {
            console.error('Login error:', error.response?.data?.message || error.message);
            alert(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="box">
            <h2>Sign In</h2>
            <form className="form-group" onSubmit={handleSubmit}>
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

                <button className="btn" type="submit">Sign In</button>
            </form>

            <p>
                Don’t have an account?{' '}
                <a href="/signup" onClick={() => navigate('/signup')}>Sign Up</a>
            </p>
        </div>
    );
};

export default Signin;
