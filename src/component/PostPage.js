import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosts = JSON.parse(sessionStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleAddPost = () => {
    const updatedPosts = [...posts, { text: newPost }];
    setPosts(updatedPosts);
    sessionStorage.setItem("posts", JSON.stringify(updatedPosts));
    setNewPost("");
  };

  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    sessionStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const goToHome = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="container">
      <button onClick={goToHome} className=" Go-home">
        Home
      </button>
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post.text}
            <button
              onClick={() => handleDeletePost(index)}
              className="but-del"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h3>Create Post</h3>
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="Write a post"
        className="Id"
      />
      <button onClick={handleAddPost} className="but">
        Add Post
      </button>
      <button onClick={handleLogout} className="but secondary">
        Logout
      </button>
    </div>
  );
}

export default PostPage;
