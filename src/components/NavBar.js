import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Modal } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
// import Auth from '../utils/auth';
import '../App.css'
import logo from '../images/logo.png'

  const NavBar = () => {
    
    const [showModal, setShowModal] = useState(false);
  
    return (
      <>
        <Navbar className='color-nav'variant='dark' expand='lg'>
        <img className='logo-image' src={logo} alt="logo"></img>
          <Container fluid>
            <Navbar.Brand as={Link} to='/'>
              Foodie Finder
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls='navbar' />
            <Navbar.Collapse id='navbar'>
            </Navbar.Collapse>
            
            <Navbar.Brand as={Link} to='Login'>
            <Link to='login'>Login</Link>
            <Routes>
            <Route path='login' element={<Login />} />
            </Routes>
            </Navbar.Brand>
            <Navbar.Brand as={Link} to='SignUp'>
            <Link to='signup'>Sign Up</Link>
            <Routes>
            <Route path='signup' element={<SignUp />} />
            </Routes>
            </Navbar.Brand>
          </Container>

          <div>
          <Modal
          size='xlg'
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby='signup-modal'>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
          </Routes>
          </Modal>
          </div>

          {/* <nav className='place'>
            <Link to='login'>Login</Link>
            <br></br>
            <Link to='signup'>Sign Up</Link>
          </nav>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
          </Routes> */}
          
        </Navbar>

        
      </>
    );
  };
  

export default NavBar