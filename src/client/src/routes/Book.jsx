import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookRequests from "../requests/books";
import userRequests from "../requests/users";
import { useNavigate } from "react-router-dom";
import { MyPageButton } from "../components/MyPageButton";

export const Book = () => {
  const [book, setBook] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBookAndUser = async () => {
      const book = await bookRequests.getByBookId(id);
      setBook(book);
      const response = window.localStorage.getItem("user");
      const loggedUser = JSON.parse(response);
      if (!loggedUser) {
        setLoggedInUser(null);
      }
      if (loggedUser) {
        const user = await userRequests.getById(loggedUser.userId);
        setLoggedInUser(user);
      }
      const user = await userRequests.getById(book.userId);
      setUser(user);
    };
    getBookAndUser();
  }, []);

  const handleClick = () => {
    if (window.confirm("Are you sure you want to delete this book")) {
      bookRequests.remove(book.id);
      navigate(`/user/${loggedInUser.id}`);
    }
  };

  if (!book || !user) {
    return <div>Unable to find data</div>;
  }
  if (!loggedInUser) {
    return (
      <div className="pt-24 ps-32 flex flex-col items-start bg-gradient-to-r from-teal-800 via-teal-600 to-teal-400">
        <p>
          <a
            className="hover:text-teal-200 underline"
            href={`/users/${user.id}`}
          >
            {user.username}
          </a>{" "}
          added this book in 2024
        </p>
        <h1 className="pt-10">{book.title}</h1>
        <p className="text-stone-900 font-semibold text-lg">By {book.author}</p>

        <div className="pb-20">
          <p className="font-semibold">
            {user.username} rated this book {book.rating} out of 5
          </p>
          <p className="transition duration-150 place-content-center w-96 p-5 rounded-md border-double border-4 border-teal-600 hover:border-emerald-300 bg-white text-sm text-black">
            {book.comment}
          </p>
          <a className="hover:text-teal-200 underline" target="_blank" href={book.url}>
            See on the internet
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="pt-24 ps-32 flex flex-col items-start bg-gradient-to-r from-teal-800 via-teal-600 to-teal-400">
        <p>You added this book in 2024</p>
        <h1 className="pt-10">{book.title}</h1>
        <p className="text-stone-900 font-semibold text-xl">By {book.author}</p>

        <div className="p-10">
          <p className="font-semibold">
            You rated this book {book.rating} out of 5
          </p>
          <p className="transition duration-150 place-content-center w-96 p-5 rounded-md border-double border-4 border-teal-600 hover:border-emerald-300 bg-white text-sm text-black">
            {book.comment}
          </p>
        </div>

        <a className="ps-10 hover:text-teal-200 underline" target="_blank" href={book.url}>
          See on the internet
        </a>

        <div className="p-10">
          <button
            className="transition duration-150 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200"
            onClick={handleClick}
          >
            Delete book
          </button>
        </div>
      </div>
      <div className="p-5">
        <MyPageButton />
      </div>
    </div>
  );
};
