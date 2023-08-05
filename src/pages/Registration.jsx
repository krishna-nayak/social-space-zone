import React, { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./Login.css";
import { auth } from "../firebase";

const Registration = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    password: "",
    confirmPassword: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 1024 * 1024) {
      alert("Image size should be less than 1 MB");
    } else if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      alert("Invalid file format. Only JPEG, PNG, and JPG are allowed.");
    } else {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, city, password, confirmPassword } =
      user;
    if (
      !firstName ||
      !email ||
      !city ||
      !password ||
      !confirmPassword ||
      !image
    ) {
      alert("All fields are required");
    } else if (!validateEmail(email)) {
      alert("Invalid email");
    } else if (!validatePassword(password)) {
      alert(
        "Invalid password. Password must contain at least 8 character, one capital letter, one numeric character, and one special character"
      );
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("Success");
      console.log(user);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up </h3>
          <div className="mb-3">
            <label>Full name</label>
            <div className="d-flex">
              <input
                type="text"
                className="form-control me-2"
                name="firstName"
                onChange={handleChange}
                placeholder="First name"
              />
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={handleChange}
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              onChange={handleChange}
              placeholder="Enter city"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              placeholder="Strong password recommended"
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Confirm password"
            />
          </div>
          <div className="mb-3">
            <label>Upload Image (max size 1MB)</label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already Registered ? <a href="/login">log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
