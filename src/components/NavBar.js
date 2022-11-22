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
  const [show, setShow] = useState(false);
  const handleCloseSave = () => setShow(false);
  const handleShowSave = () => setShow(true);
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
            <div onClick={handleShow}>
            <button className="logoutBtn" onClick={handleShowSave}>
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
      <Modal show={show} onHide={handleCloseSave}>
            <div className="modal-header">
              <h5 className="modal-title text-light w-100">Saved Restaurants</h5>
            </div>
            <div className="modal-body ">
              <ul style={{ listStyle: 'none' }}>
                <li>
                      <h3 className="modalText">Demera Ethiopian Restaurant</h3>
                      <img className="restPic" src="https://s3-media1.fl.yelpcdn.com/bphoto/RpwhMHq576zjksGyT0y-bg/o.jpg" alt='restaurant' width="50%"></img>
                      <p className="modalText">4801 N Broadway St Chicago, IL 60640</p>
                      <p className="modalText">(773) 334-8787</p>
                </li>
                <li>
                      <h3 className="modalText">Ba Le Sandwich</h3>
                      <img className="restPic" src="https://s3-media3.fl.yelpcdn.com/bphoto/w2t_gkDnUcWV9-LSJ9WLOA/o.jpg" alt='restaurant' width="50%"></img>
                      <p className="modalText">5014 N Broadway St Chicago, IL 60640</p>
                      <p className="modalText">(773) 561-4424</p>
                </li>
                <li>
                      <h3 className="modalText">Taste of Lebanon</h3>
                      <img className="restPic" src="https://s3-media2.fl.yelpcdn.com/bphoto/MQNeIutuy4W4Y3Jr7-1Q-g/o.jpg" alt='restaurant' width="50%"></img>
                      <p className="modalText">1509 W Foster Ave Chicago, IL 60640</p>
                      <p className="modalText">(773) 334-1600</p>
                </li>
              </ul>
            </div>
              <Modal.Footer>
              <button className="logoutBtn" onClick={handleCloseSave}>
                  Close
              </button>
              </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar