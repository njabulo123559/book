import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';

import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { HomePage } from "./auth/HomePage";

import { ContactPage } from "./auth/ContactPage";
import {About} from "./auth/About"
import {Service} from "./auth/Service";
import {Dashboard} from "./auth/DashboardPage/Dashboard";
import {FileGrid} from "./auth/DashboardPage/FileGrid"
import {Ebook} from "./auth/Ebook";
import {Sync} from "./auth/Sync"
import {Admin} from "./auth/Admin"
import {Messages} from "./auth/Messages"
import { BrowserRouter as Router, Route, Switch , Routes} from 'react-router-dom';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <Router>
    <div className="App">
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/ebook" element={<Ebook/>}/>
        <Route path="/file" element={<FileGrid/>}/>
        <Route path="/sync" element={<Sync/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/messages" element={<Messages/>}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;