import { useEffect, useState } from "react";
import {
  LogoutButton,
  Books,
  BookForm,
  Notification,
  ReadingList,
  ToBooks,
  ToUsers,
} from "../components";
import { useParams } from "react-router-dom";
import userRequests from "../requests/users";

const ButtonClass =
  "transition delay-150 duration-300 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600";

export const LoggedIn = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [showBookForm, setShowBookForm] = useState(false);
  const [showBooks, setShowBooks] = useState(false);
  const [showReadingList, setShowReadingList] = useState(false);
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
    setShowReadingList(false);
  };

  const handleShowBooks = () => {
    setShowBooks(true);
    setShowBookForm(false);
    setShowReadingList(false);
  };

  const handleReadingList = () => {
    setShowReadingList(true);
    setShowBooks(false);
    setShowBookForm(false);
  };

  const handleRemove = async () => {
    console.log("removing");
    try {
      const user = await userRequests.getById(id);
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  if (!userId) {
    return <div>You are not logged in</div>;
  }
  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-teal-900 to-teal-500 p-20 ps-0 pe-0 text-white">
        <Notification />
        <h1 className="text-5xl p-10">Welcome {user.username}</h1>
        <div className="flex justify-center">
          <div className="bg-emerald-100 px-6 p-2 rounded-md flex flex md:flex-row flex-col justify-around flex-wrap gap-6">
            <button className={ButtonClass} onClick={handleShowBooks}>
              My books
            </button>

            <button className={ButtonClass} onClick={handleAddBook}>
              Add book
            </button>

            <button className={ButtonClass} onClick={handleReadingList}>
              Reading list
            </button>

            <ToBooks />

            <ToUsers />

            <LogoutButton />
          </div>
        </div>
      </div>
      {showBooks ? (
        <div className="flex justify-center py-20">
          <Books books={user.read_books} />
        </div>
      ) : null}
      {showBookForm ? (
        <div className="flex justify-center py-20">
          <BookForm />
        </div>
      ) : null}
      {showReadingList ? (
        <div className="flex justify-center py-20">
          <ReadingList books={user.marked_books} onRemove={handleRemove} />
        </div>
      ) : null}
      <div className="border-solid border-8 border-teal-900 w-full">
        <div
          className="h-32 w-full bg-center bg-sky-500/50 opacity-70"
          style={{ backgroundImage: "url('../books.jpeg')" }}
        ></div>
      </div>
    </div>
  );
};
