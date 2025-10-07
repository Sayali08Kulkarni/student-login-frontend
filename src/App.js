import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", { email, password })
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", margin: "10px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "10px", margin: "10px" }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>
      </form>
      <h3 style={{ color: message === "Login successful" ? "green" : "red" }}>
        {message}
      </h3>
    </div>
  );
}

export default App;
