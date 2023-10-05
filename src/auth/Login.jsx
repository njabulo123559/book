import React, { useState } from "react";
import {auth} from "../firebase";
import {signInWithEmailAndPassword} from "firebase/auth"
import { Link } from 'react-router-dom';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
        console.log(userCredential)
    })
    .catch((error) => {
        console.log(error);

    });
};

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="bt5" type="submit">Log In</button>
            </form>
            <Link to="/register" className="link-btn">Don't have an account? Register here.</Link>

        </div>
    )
}