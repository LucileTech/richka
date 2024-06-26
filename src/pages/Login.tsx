import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useHistory();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token); // Store token in localStorage
        navigate.push("/"); // Redirect to homepage or desired route after login
      } else {
        console.error("Login failed:", res.data);
      }
    } catch (err) {
      console.error("Error during login:", err.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(); // Call handleLogin function to initiate login process
  };

  return (
    <form onSubmit={handleSubmit} className="Auth-form">
      <label>Email address</label>
      <input
        type="email"
        placeholder="Enter email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Login;
