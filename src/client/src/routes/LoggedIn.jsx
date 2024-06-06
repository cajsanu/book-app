import { useEffect, useState, useContext } from "react";
import { LogoutButton } from "../components/LogoutButton";
import { Books } from "../components/Books";
import { BookForm } from "../components/BookForm";
import { useParams } from "react-router-dom";
import userRequests from "../requests/users";
import { Togglable } from "../components/Togglable";
import { Notification } from "../components/Alert"

export const LoggedIn = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const user = await userRequests.getById(id);
      setUser(user);
    };
    getUser();
    const response = window.localStorage.getItem("user");
    const status = JSON.parse(response);
    setUserId(status.userId);
  }, []);

  if (!userId) {
    return <div>You are not logged in</div>;
  }
  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div className="bg-gradient-to-r from-teal-900 to-teal-500 p-10">
      <Notification />
      <h1 className="text-5xl p-20">Welcome {user.username}</h1>
      <div className="p-10">
        <div>
          <Togglable showContent="Show books" hideContent="Cancel">
            <Books books={user.books} />
          </Togglable>
        </div>
        <div className="p-10">
          <Togglable showContent="Add book" hideContent="Cancel">
          <BookForm />
          </Togglable>
        </div>
      </div>
      <div className="p-10">
        <LogoutButton />
      </div>
    </div>
  );
};
