import "../App.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { LogoutButton } from "../components/LogoutButton";
import { Books } from "../components/Books"
import { BookForm } from "../components/BookForm";
import { useParams } from "react-router-dom";
import userRequests from "../requests/users"

export const LoggedIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const user = await userRequests.getById(id);
      setUser(user)
    };
    getUser();
    const response = window.localStorage.getItem("loginStatus")
    const status = JSON.parse(response)
    setStatus(status.loggedIn)
  }, []);

  const handleClick = () => {};

  if (!status) {
    return <div>You are not logged in</div>
  }
  if (!user) {
    return <div>No user found</div>
  }

  return (
    <>
      <h1>My books</h1>
      <Books books={user.books}/>
      <div>
        {" "}
        Add book
        <BookForm />
      </div>
      <div>
        <button onClick={handleClick}>What to do with this</button>
      </div>
      <LogoutButton />
    </>
  );
};
