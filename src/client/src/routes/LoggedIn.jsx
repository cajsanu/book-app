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
  const [addBook, setAddBook] = useState(false);
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

  const handleClick = () => {
    setAddBook(true);
  };

  if (!status) {
    return <div>You are not logged in</div>;
  }
  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <>
      <h1>My books</h1>
      <Books books={user.books} />
      <div>
        <button onClick={handleClick}>Add book</button>
      </div>
      <div>{addBook ? <BookForm /> : null}</div>
      <Togglable showContent="Log In" hideContent="Cancel">
        <LoginForm createUser={handleLogin} />
      </Togglable>
      <br />
      <LogoutButton />
    </>
  );
};
