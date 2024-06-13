import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userRequests from "../requests/users";

export const ToLoggedIn = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const response = window.localStorage.getItem("user");
      const loggedUser = JSON.parse(response);
      if (!loggedUser) {
        setLoggedInUser(null);
      }
      if (loggedUser) {
        const user = await userRequests.getById(loggedUser.userId);
        setLoggedInUser(user);
      }
    };
    getUser();
  }, []);

  return loggedInUser ? (
    <div>
      <button
        className="transition delay-150 duration-300 flex w-full justify-center bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-100 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        onClick={() => navigate(`/user/${loggedInUser.id}`)}
      >
        My own bookshelf
      </button>
    </div>
  ) : null;
};
