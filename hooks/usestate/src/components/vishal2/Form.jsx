import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInput = (event) => {
    const vishalName = event.target.name;
    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [vishalName]: value };
    });
  };

  return (
    <div>
      <div className="container">
        <h2>Registration</h2>
        <input
          type="text"
          placeholder="name"
          name="username"
          className="input1"
          value={formData.username}
          onChange={handleInput}
        />
        <input
          type="email"
          placeholder="name"
          name="email"
          className="input2"
          value={formData.email}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input3"
          value={formData.password}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="confirm Password"
          name="confirmPassword"
          className="input4"
          value={formData.confirmPassword}
          onChange={handleInput}
        />
      </div>
      <button className="button">Create Account</button>
      <p>{`my name is ${formData.username} email address is ${formData.email}`}</p>
    </div>
  );
}
