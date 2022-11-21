// see SignupForm.js for comments
import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";

// import useMutation and LOGIN-USER
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import '../App.css'

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // declaring loginUser with useMutation
  const [loginUser] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // use loginUser function
    try {
      const { data } = await loginUser({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (

    <>
      <main>
      <div>
      <div className="card">
      <div className="modal-header">
              <h5 className="modal-title text-light w-100">Login! Press ESC or Submit to exit.</h5>
            </div>
            <div className="modal-body">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group id="centerlogin">

          <input
          className="zipField"
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group id="centerlogin">
          <input
          className="zipField"
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <div className="modal-footer">
        <button
          className="lspageBtn"
          style={{ cursor: 'pointer' }}
          type="submit"
        >
          Submit
        </button>
        </div>
      </Form>
      </div>
      </div>
      </div>
      </main>
    </>
  );
};

export default LoginForm;