import { useState } from "react";
import { login } from "../requests/login";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const logIn = async (event) => {
    event.preventDefault();
    const data = await login({ username: username, password: password });
    setUsername("");
    setPassword("");
    navigate(`/user/${data.id}`)
  };

  return (
    <div className="loginform">
      <form onSubmit={logIn}>
        <label>
          username
          <input
            type="text"
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
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
