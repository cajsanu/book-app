import { useState, useEffect } from "react";
import { LoginForm } from "./LoginForm";
import { LogoutButton } from "./LogoutButton";
import { UserForm } from "./UserForm";
import { Togglable } from "./Togglable";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const response = window.localStorage.getItem("user");
    if (response) {
      const user = JSON.parse(response);
      setUserId(user.userId);
    }
  }, []);

  const handleClick = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <div>
      {userId ? (
        <>
          <LogoutButton />
          <button className="sticky top-0" onClick={handleClick}>My own page</button>
        </>
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
