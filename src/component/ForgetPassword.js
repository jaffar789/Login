import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    setMessage("Reset link has been sent to your email.");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1>ForgetPassword</h1>
      <input type="email" placeholder="Enter your email" />
      <button onClick={handleReset} className="but">
        Reset Link
      </button>
      <button onClick={goToHome} className="Go-home">
        Home
      </button>
      <p className="message">{message}</p>
    </div>
  );
}

export default ForgetPassword;
