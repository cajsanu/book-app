import "../App.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { LogoutButton } from "../components/LogoutButton";
import { Books } from "../components/Books";
import { BookForm } from "../components/BookForm";
import { useParams } from "react-router-dom";
import userRequests from "../requests/users";
import { Togglable } from "../components/Togglable";

export const LoggedIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const user = await userRequests.getById(id);
      setUser(user);
    };
    getUser();
    const response = window.localStorage.getItem("loginStatus");
    const status = JSON.parse(response);
    setStatus(status.loggedIn);
  }, []);

  if (!status) {
    return <div>You are not logged in</div>;
  }
  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <>
      <h1 className="text-5xl p-20">Welcome {user.username}</h1>
      <div className="flex felx-row felx items-center">
        <Togglable showContent="Show books" hideContent="Cancel">
          <Books books={user.books} />
        </Togglable>
        <Togglable showContent="Add book" hideContent="Cancel">
          <BookForm />
        </Togglable>
      </div>
      <LogoutButton />
    </>
  );
};
