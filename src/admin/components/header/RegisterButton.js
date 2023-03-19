import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { registerWithEmail } = useAuth();

  async function handleEmailRegistration(event) {
    event.preventDefault();
    try {
      await registerWithEmail(email, password);
    } catch (error) {
      setError("Failed to register with email and password.");
    }
  }

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleEmailRegistration}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button type="submit">Register with email and password</button>
      </form>
    </div>
  );
}

export default Register;
