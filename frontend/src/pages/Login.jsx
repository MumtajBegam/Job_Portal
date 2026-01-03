import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Implement login logic using fetch or axios
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div className="mb-3">
        <label>Username</label>
        <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
};

export default Login;