import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]); // State to hold errors
  const navigate = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
        username,
        email,
        password,
      });
      console.log(res.data);
      navigate.push("/login");
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        // Handle specific errors from backend
        setErrors([err.response.data.error]);
      } else {
        setErrors(["An unexpected error occurred. Please try again."]);
      }
    }
  };

  return (
    <div className="auth">
      <form onSubmit={handleSubmit} className="Auth-form">
        {/* Username Field */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* Display Error for Username */}
        {errors.map((error, index) => (
          <div key={index} className="alert alert-danger">
            {error}
          </div>
        ))}

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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
