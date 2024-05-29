import { useState, useEffect } from "react";
import { LoginForm } from "./LoginForm";
import { LogoutButton } from "./LogoutButton";
import { UserForm } from "./UserForm";
import { useNavigate } from "react-router";

export const Menu = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const response = window.localStorage.getItem("loginStatus")
    const status = JSON.parse(response)
    setStatus(status.loggedIn)
  }, []);

  const handleClickUsers = () => {
    navigate("/users");
  };
  const handleClickSignUp = () => {
    return <UserForm />;
  };
  const handleClickLogin = () => {
    return <LoginForm />;
  };
  const handleClickBooks = () => {
    navigate("/books")
  };

  return (
    <>
      <button onClick={handleClickUsers}>Users</button>
      <button onClick={handleClickSignUp}>Sign up</button>
      <button onClick={handleClickLogin}>Log in</button>
      <button onClick={handleClickBooks}>Books</button>
      {status ? <LogoutButton /> : null}
    </>
  );
};
