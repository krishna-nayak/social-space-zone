import React, { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";

import "./Login.css";

// style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }}

const Registration = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = user;
    if (!validateEmail(email)) alert("Invalid email");
    if (!validatePassword(password)) alert("Invalid password");
    if (validateEmail(email) && validatePassword(password)) alert("Success");
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input type="text" className="form-control" name="firstName" onChange={handleChange} placeholder="First name" />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" name="lastName" onChange={handleChange} placeholder="Last name" />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" name="password" onChange={handleChange} placeholder="Enter password" />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
