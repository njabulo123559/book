import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import {NavigationBar} from "../auth/NavigationBar";
import { auth } from '../firebase'; // Assuming your Firebase configuration is in a 'firebase.js' file in the same or parent directory

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setTimeout(() => {
          setIsLoading(false);
          navigate('/');
        }, 1000); // Simulate a 1-second loading delay
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    

    <div className="auth-form-container">
      <NavigationBar/>
      <h2>Login</h2>
      {isLoading ? (
        <div className="progress-bar-container">
          <CircularProgressbar
            value={100}
            text={`Loading...`}
            styles={buildStyles({
              strokeLinecap: 'round', // Circular line ends
              pathTransitionDuration: 1, // Animation duration in seconds
              textColor: '#333', // Text color
              textSize: '16px', // Text size
              pathColor: `#00796B`, // Progress bar color
              trailColor: '#E0E0E0', // Background color
            })}
          />
        </div>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button className="bt5" type="submit">
            Log In
          </button>
        </form>
      )}
      <Link to="/register" className="link-btn">
        Don't have an account? Register here.
      </Link>
      <Link to="/admin" className="link-btn1">
        Admin Login.
      </Link>
    </div>
  );
};
