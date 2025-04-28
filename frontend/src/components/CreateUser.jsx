import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'follower' // default follower
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/users/create', formData);
            console.log(response.data);
            alert('User created successfully!');
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Failed to create user.');
        }
    };

    return (
        <div className='box'>
            <h2>Create User</h2>
            <form className='form-group' onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} /><br />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
                <select name="role" onChange={handleChange}>
                    <option value="follower">Follower</option>
                    <option value="creator">Creator</option>
                </select><br />
                <button className='btn' type="submit">Create User</button>
            </form>
        </div>
    );
}

export default CreateUser;
