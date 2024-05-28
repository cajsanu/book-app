import pingReq from "../requests/pings";
import "../App.css";
import { useNavigate } from "react-router";
import  { LoginForm } from "../components/LoginForm";

const ping = await pingReq.getAll();
console.log(ping, "!!!");

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users");
  };

  return (
    <>
      <h1>Book App</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea
        commodi consequat. Quis aute iure reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
        cupiditat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </div>
      <div>
        <p>Click down below to se the users</p>
        <button onClick={handleClick}>Users</button>
      </div>
      <LoginForm />
    </>
  );
};
