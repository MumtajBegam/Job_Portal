import React, { useState } from 'react';
import axios from 'axios';

const PostJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/api/jobs/', {
      title,
      description,
      location,
      salary: parseInt(salary),
      recruiter: 1, // Replace with logged-in recruiter ID
    });
    alert('Job posted successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post a New Job</h2>
      <input className="form-control mb-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="form-control mb-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input className="form-control mb-2" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input className="form-control mb-2" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
      <button className="btn btn-success">Post Job</button>
    </form>
  );
};

export default PostJob;
