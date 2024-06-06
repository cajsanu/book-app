import { useEffect, useState, useContext } from "react";
import { LogoutButton } from "../components/LogoutButton";
import { Books } from "../components/Books";
import { BookForm } from "../components/BookForm";
import { useParams } from "react-router-dom";
import userRequests from "../requests/users";
import { Togglable } from "../components/Togglable";
import { Notification } from "../components/Alert";

export const LoggedIn = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [showBookForm, setShowBookForm] = useState(false);
  const [showBooks, setShowBooks] = useState(false);
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

  const handleAddBook = () => {
    setShowBookForm(true);
    setShowBooks(false);
  };

  const handleShowBooks = () => {
    setShowBooks(true);
    setShowBookForm(false);
  };

  if (!userId) {
    return <div>You are not logged in</div>;
  }
  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-teal-900 to-teal-500 p-10">
        <Notification />
        <h1 className="text-5xl p-10">Welcome {user.username}</h1>
        <div className="flex justify-center">
          <div className="w-1/3 bg-emerald-100 p-2 rounded-md flex flex-row justify-between">
            <div className="">
              <button
                className="transition delay-150 duration-300 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                onClick={handleShowBooks}
              >
                Show books
              </button>
            </div>
            <div className="">
              <button
                className="transition delay-150 duration-300 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                onClick={handleAddBook}
              >
                Add book
              </button>
            </div>
            <div className="">
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
      <a>
        <img
          className="h-20 w-full bg-center bg-sky-500/50 opacity-80"
          style={{ backgroundImage: `url('../src/images/books.jpeg')` }}
        />
      </a>
      {showBooks ? (
        <div className="flex justify-center py-10">
          <Books books={user.books} />
        </div>
      ) : null}
      {showBookForm ? (
        <div className="flex justify-center py-10">
          <BookForm />
        </div>
      ) : null}
    </div>
  );
};
