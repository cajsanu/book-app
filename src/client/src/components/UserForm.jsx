import { useState } from "react";
import { useNavigate } from "react-router";
import userRequests from "../requests/users";

export const UserForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (event) => {
    event.preventDefault();
    userRequests.create({ name: name, username: username, password: password });
    setName("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="loginform">
      <p>Sign up to rate and more</p>
      <form onSubmit={createUser}>
        <label>
          name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          username
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};
