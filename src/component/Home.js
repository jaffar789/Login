import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const handleCreatePost = () => {
    navigate("/post");
  };

  return (
    <div className="container">
      <h1>Welcome to NetWorld</h1>
      <button onClick={handleCreatePost} className="but">
        Create Post
      </button>
      <button onClick={handleLogout} className="but secondary">
        Logout
      </button>
    </div>
  );
}

export default Home;
