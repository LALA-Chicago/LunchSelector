import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import '../App.css'
import logo from '../images/logo.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Nav = () => {
    return(
        <div className="navbar">
            
        <nav>
            <Link to='login'>Login</Link>
            <Link to='signup'>Sign Up</Link>
          </nav>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
          </Routes>
      </div>
    );
}

export default Nav