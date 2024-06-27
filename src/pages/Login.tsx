import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface LoginProps {
  onLogin: (user: { email: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]); // State to hold errors
  const navigate = useHistory();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        email,
        password,
      });

      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token); // Store token in localStorage
        onLogin({ email });
        navigate.push("/"); // Redirect to homepage or desired route after login
      } else {
        console.error("Login failed:", res.data);
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        // Handle specific errors from backend
        setErrors([err.response.data.error]);
      } else {
        setErrors(["An unexpected error occurred. Please try again."]);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(); // Call handleLogin function to initiate login process
  };

  return (
    <div className="auth">
      <form onSubmit={handleSubmit} className="Auth-form">
        {/* Email Field */}
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Display Error for Email */}
        {errors.map((error, index) => (
          <div key={index} className="alert alert-danger">
            {error}
          </div>
        ))}

        {/* Password Field */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* Display Error for Password */}
        {errors.map((error, index) => (
          <div key={index} className="alert alert-danger">
            {error}
          </div>
        ))}

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <a href="/richka/#/register">or Register</a>
      </form>
    </div>
  );
};

export default Login;
