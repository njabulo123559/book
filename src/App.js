import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';

import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { HomePage } from "./auth/HomePage";
import {NavigationBar} from "./auth/NavigationBar";
import { ContactPage } from "./auth/ContactPage";
import {About} from "./auth/About"
import { BrowserRouter as Router, Route, Switch , Routes} from 'react-router-dom';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <Router>
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<About/>}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;