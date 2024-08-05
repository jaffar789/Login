import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import ForgetPassword from "./component/ForgetPassword";
import NewUser from "./component/NewUser";
import Home from "./component/Home";
import PostPage from "./component/PostPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
