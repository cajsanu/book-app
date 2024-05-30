import { logout } from "../requests/logout";
import { useNavigate } from "react-router";

export const LogoutButton = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        logout()
        navigate("/")
    }

  return (
    <>
      <button className="absolute top-0 right-0" onClick={handleClick}>Log out</button>
    </>
  );
};
