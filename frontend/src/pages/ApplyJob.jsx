import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ApplyJob = () => {
  const { jobId } = useParams();
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('job', jobId);
    formData.append('applicant', 2); // Replace with logged-in user ID
    formData.append('resume', resume);

    await axios.post('http://localhost:8000/api/applications/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    alert('Application submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply to Job</h2>
      <div className="mb-3">
        <label>Upload Resume</label>
        <input type="file" className="form-control" onChange={(e) => setResume(e.target.files[0])} />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ApplyJob;
