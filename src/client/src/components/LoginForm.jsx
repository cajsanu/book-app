import { useState } from "react";
import { useNavigate } from "react-router";
import userRequests from "../requests/users";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addUser = (event) => {
    event.preventDefault()
    userRequests.create({ name: name, username: username, password: password })
    setName('')
    setUsername('')
    setPassword('')
  }

  return (
    <div className="loginform">
      <form onSubmit={addUser}>
      <label>
          name
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          username
          <input
            type="email"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit" id="login-button">
          Login
        </button>
      </form>
    </div>
  );
};
