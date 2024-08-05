import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const clickForget = (e) => {
    e.preventDefault();
    navigate("/forget-password");
  };

  const clickLogin = () => {
    const users = JSON.parse(sessionStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setMessage("Welcome, you have successfully logged in");
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      setMessage("Invalid Id and Password. Please try again.");
    }
  };

  // const reset = () => {
  //   setMessage("Not logged in");
  //   setUsername('');
  //   setPassword('');
  // };

  const handleNewUser = () => {
    navigate("/new-user");
  };

  return (
    <div className="container">
      <h1>Login to enjoy</h1>
      <p className="message">{message}</p>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="Id"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="Password"
      />
      <br />
      <button onClick={clickForget} className="but secondary">
        Forget-Password
      </button>
      <button onClick={clickLogin} className="but">
        Login
      </button>
      {/* <button onClick={reset} className="but secondary">
        Reset
      </button> */}
      <button onClick={handleNewUser} className="but secondary">
        New User
      </button>
    </div>
  );
}

export default Login;
