import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = ({ onCreate }) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const [formData, setFormData] = useState({
        title: '',
        description: '',
        reward: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // ⏳ Start loading
        try {
            const response = await axios.post('http://localhost:3001/api/quests/create', formData);
            console.log(response.data);
            setFormData({
                title: '',
                description: '',
                reward: ''
            });
            if (onCreate) {
                onCreate();
            }
            navigate('/'); // 🚀 Redirect
        } catch (error) {
            console.error('Error creating quest:', error);
            alert('Failed to create quest.');
        } finally {
            setLoading(false); // 🛑 Stop loading no matter what
        }
    };




    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className=" box">
            <div className="">
                <h2>Create a New Quest</h2>
                <form className='form-create' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Quest Title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reward">Reward:</label>
                        <input
                            type="number"
                            name="reward"
                            placeholder="Reward Points"
                            value={formData.reward}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content:</label>
                        <textarea
                            name="description"
                            placeholder="Quest Description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button className='btn' type="submit" disabled={loading}>
                        {loading ? 'Creating...' : 'Create'}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Create;