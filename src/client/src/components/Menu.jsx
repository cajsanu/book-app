import { useState, useEffect } from "react";
import { LoginForm } from "./LoginForm";
import { LogoutButton } from "./LogoutButton";
import { UserForm } from "./UserForm";
import { Togglable } from "./Togglable";

export const Menu = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const response = window.localStorage.getItem("loginStatus");
    const status = JSON.parse(response);
    setStatus(status.loggedIn);
  }, []);

  return (
    <div>
      {status ? (
        <LogoutButton />
      ) : (
        <div>
          <Togglable showContent="Sign in" hideContent="Cancel">
            <LoginForm />
          </Togglable>
          <Togglable showContent="Sign up" hideContent="Cancel">
            <UserForm />
          </Togglable>
        </div>
      )}
    </div>
  );
};
