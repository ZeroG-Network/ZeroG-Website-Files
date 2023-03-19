import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginWithDiscord, loginWithMicrosoft, loginWithEmail } = useAuth();

  async function handleDiscordLogin() {
    try {
      await loginWithDiscord();
    } catch (error) {
      setError("Failed to log in with Discord.");
    }
  }

  async function handleMicrosoftLogin() {
    try {
      await loginWithMicrosoft();
    } catch (error) {
      setError("Failed to log in with Microsoft.");
    }
  }

  async function handleEmailLogin(event) {
    event.preventDefault();
    try {
      await loginWithEmail(email, password);
    } catch (error) {
      setError("Failed to log in with email and password.");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <button onClick={handleDiscordLogin}>Login with Discord</button>
      <button onClick={handleMicrosoftLogin}>Login with Microsoft</button>
      <form onSubmit={handleEmailLogin}>
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
        <button type="submit">Login with email and password</button>
      </form>
    </div>
  );
}

export default Login;
