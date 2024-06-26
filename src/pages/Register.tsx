import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      navigate.push("/login");
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Auth-form">
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter name"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Email address</label>
      <input
        type="email"
        placeholder="Enter email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default Register;
