import React, { useState } from "react";
import {auth} from "../firebase";
import { Link } from 'react-router-dom';
import {NavigationBar} from "../auth/NavigationBar";
import { createUserWithEmailAndPassword } from "firebase/auth";


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
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                // User registration successful, you can access userCredential.user for user details
                console.log("User registered successfully:", userCredential.user);

                // Update the displayName of the user
                // await updateProfile(auth.currentUser, { displayName: name });
            } catch (error) {
                setError(error.message);
            }
        }
    }

    console.log("registered user", auth.currentUser);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <div className="auth-form-container">
            <NavigationBar/>
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
                    
                </div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password-input-container">
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={showConfirmPassword ? "text" : "password"} placeholder="********" id="confirmPassword" name="confirmPassword" />
                    
                </div>
                <button className="btn5" type="submit">Register</button>
            </form>
            <Link to="/login" className="link-btn">Already have an account? Login here.</Link>

        </div>
    )
}


