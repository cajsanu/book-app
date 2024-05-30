import { useState, useEffect } from "react";
import { LoginForm } from "./LoginForm";
import { LogoutButton } from "./LogoutButton";
import { UserForm } from "./UserForm";
import { useNavigate } from "react-router";

export const Menu = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [userForm, setUserForm] = useState(false);
  const [loginForm, setLoginForm] = useState(false);

  useEffect(() => {
    const response = window.localStorage.getItem("loginStatus");
    const status = JSON.parse(response);
    setStatus(status.loggedIn);
  }, []);

  const handleClickUsers = () => {
    navigate("/users");
  };
  const handleClickSignUp = () => {
    setUserForm(true);
    setLoginForm(false);
  };
  const handleClickLogin = () => {
    setLoginForm(true);
    setUserForm(false);
  };
  const handleClickBooks = () => {
    navigate("/books");
  };

  return (
    <div>
      <div className="absolute top-0 left-0">
        <button onClick={handleClickUsers}>Users</button>
        <button onClick={handleClickLogin}>Log in</button>
        <button onClick={handleClickSignUp}>Sign up</button>
        <button onClick={handleClickBooks}>Books</button>
      </div>
      <div>
        {status ? <LogoutButton /> : null}
        {loginForm ? <LoginForm /> : null}
        {userForm ? <UserForm /> : null}
      </div>
    </div>
  );
};
