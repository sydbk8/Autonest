import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Auth.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      const { token, expiresIn } = response.data;

      // Calculate the expiration time by adding expiresIn seconds to the current time
      const expirationTime = Date.now() + expiresIn * 1000;

      // Store the token and expiration time in the local storage
      localStorage.setItem("token", token);
      localStorage.setItem("expirationTime", expirationTime);

      // Redirect to the dashboard or home page after successful login
      navigate("/explore"); // Replace with your desired redirect path
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
      <div className="form">
        <div className="form-wrapper">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
      <div className="form-control">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
        <button type="submit">Login</button>
      </form>
        <p>
          Don't have an account yet? <Link className="inline" to="/register">Sign up</Link>
        </p>
    </div>
      </div>
  );
};

export default Login;
