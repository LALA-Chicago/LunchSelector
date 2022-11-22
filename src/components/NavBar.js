import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Modal } from 'react-bootstrap';
import {  Routes, Route } from 'react-router-dom';
import Login from '../pages/Login'
import saved from '../components/Saved'
import SignUp from '../pages/SignUp'
import Auth from '../utils/auth';
import '../App.css'
import logo from '../images/logo.png'

  const NavBar = () => {

    const navigate = useNavigate();

    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
    
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);

    const handleShow = () => setShowModal(true);
  
    return (
      <>
        <Navbar className='color-nav'variant='dark' expand='lg'>
        <img className='logo-image' src={logo} alt="logo"></img>
          <Container fluid>
            <Navbar.Brand  id="navbar-brand" as={Link} to='/'>
              Foodie Finder
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar' />

            <Navbar.Collapse id='navbar'>

            {Auth.loggedIn() ? (
              <>
              <button className="logoutBtn" onClick={logout}>
                Logout
              </button>
              <br></br>
              <br></br>
              <div className='saveRight' onClick={handleShow}>
              <button className="savedListBtn" onClick={() => navigate("/saved")}>
                Saved List
              </button>
              </div>
              
              </>
              ) : (

            <nav onClick={handleShow}>
              <div id='place'>
              <Link to='login'>Login</Link>
            <Link to='signup'>Sign Up</Link>
              </div>

            <Modal show={showModal} onHide={handleClose} centered>
            <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            </Routes>
            </Modal>
            </nav>
            )}


            </Navbar.Collapse>
            
          </Container>


          
        </Navbar>

        
      </>
    );
  };
  

export default NavBar