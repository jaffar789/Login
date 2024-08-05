
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleAddUser = () => {
    if (username && password) {
      const users = JSON.parse(sessionStorage.getItem('users')) || [];
      users.push({ username, password });
      sessionStorage.setItem('users', JSON.stringify(users));
      setMessage('User added successfully.');
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1>New User</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleAddUser} className="but">Add User</button>
      <button onClick={goToHome} className="but secondary">Go to Home</button>
      <p className="message">{message}</p>
    </div>
  );
}

export default NewUser;
