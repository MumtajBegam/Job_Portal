import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [applications, setApplications] = useState([]);
  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/applications/?applicant=2') // Replace 2 with logged-in user ID
      .then(res => setApplications(res.data));

    axios.get('http://localhost:8000/api/jobs/?recruiter=1') // Replace 1 with recruiter ID
      .then(res => setPostedJobs(res.data));
  }, []);

  return (
    <div>
      <h2>Your Applications</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id}>{app.job} - Applied At: {new Date(app.applied_at).toLocaleString()}</li>
        ))}
      </ul>

      <h2 className="mt-4">Your Posted Jobs</h2>
      <ul>
        {postedJobs.map(job => (
          <li key={job.id}>{job.title} - {job.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
