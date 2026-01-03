import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/jobs/').then((res) => setJobs(res.data));
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id} className="card mb-3">
          <div className="card-body">
            <h5>{job.title}</h5>
            <p>{job.description}</p>
            <small>{job.location}</small>
             <br />
            <Link to={`/apply/${job.id}`} className="btn btn-primary btn-sm mt-2">Apply</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
