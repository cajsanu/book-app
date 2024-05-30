import "../App.css";
import { useNavigate } from "react-router";
import { LoginForm } from "../components/LoginForm";
import { UserForm } from "../components/UserForm";
import { useEffect, useState } from "react";
import { Menu } from "../components/Menu";

export const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // useEffect(() => {

  // }, []);

  const handleClick = () => {
    navigate("/users");
  };

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="text-base/loose pt-28">
        <h1 className="text-5xl font-bold underline text-center">Book App</h1>
        <div className="pt-20">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
          ea commodi consequat. Quis aute iure reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
          cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </div>
      </div>
    </div>
  );
};
