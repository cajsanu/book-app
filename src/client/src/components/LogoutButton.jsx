import { logout } from "../requests/logout";
import { useNavigate } from "react-router";
import AlertContext from "../contexts/AlertContext";
import { useContext } from "react";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const [alert, alertDispatch] = useContext(AlertContext);

  const handleClick = () => {
    if (window.confirm("Are you sure you want to log out")) {
      logout();
      navigate("/");
      alertDispatch({ type: "LOGOUT", payload: "You are now logged out" });
    }
  };

  return (
    <>
      <button
        className="transition delay-150 duration-300 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        onClick={handleClick}
      >
        Log out
      </button>
    </>
  );
};
