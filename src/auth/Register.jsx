import React, { useState } from "react";
import {auth} from "../firebase";
import { Link } from 'react-router-dom';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform password validation checks
        if (password !== confirmPassword) {
            setError("Passwords do not match");
        } else if (password.length < 8) {
            setError("Password must be at least 8 characters long");
        } else {
            // Password is valid, proceed with form submission
            try {
                await auth.createUserWithEmailAndPassword(email, password);
            } catch (error) {
                setError(error.message);
            }
        }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Perform password validation checks
    //     if (password !== confirmPassword) {
    //         setError("Passwords do not match");
    //     } else if (password.length < 8) {
    //         setError("Password must be at least 8 characters long");
    //     } else {
    //         // Password is valid, proceed with form submission
    //         console.log(email);
    //     }
    // }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            {error && <div className="error-message">{error}</div>}
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <div className="password-input-container">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder="********" id="password" name="password" />
                    <button type="button" onClick={togglePasswordVisibility}>{showPassword ? "Hide" : "Show"}</button>
                </div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password-input-container">
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={showConfirmPassword ? "text" : "password"} placeholder="********" id="confirmPassword" name="confirmPassword" />
                    <button type="button" onClick={toggleConfirmPasswordVisibility}>{showConfirmPassword ? "Hide" : "Show"}</button>
                </div>
                <button className="btn5" type="submit">Register</button>
            </form>
            <Link to="/login" className="link-btn">Already have an account? Login here.</Link>

        </div>
    )
}


