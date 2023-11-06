import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {NavigationBar} from "../auth/NavigationBar"
import '../admin.css'

const Admin = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const adminUsername = "Admin";
  const adminPassword = "Ykfh@234n_3";

  const handleLogin = () => {
    if (username === adminUsername && password === adminPassword) {
      // Successful login, navigate to the home page
      navigate('/');
    } else {
      // Invalid login, display an error message
      alert("Only admins are able to login here.");
    }
  };

  return (
    <div className="login-container">
        <NavigationBar/>
      <h2>Admin Login</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btna" onClick={handleLogin}>Login</button>
    </div>
  );
};

export {Admin};
