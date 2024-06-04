import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookRequests from "../requests/books";
import userRequests from "../requests/users";
import { useNavigate } from "react-router-dom";

export const Book = () => {
  const [book, setBook] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [user, setUser] = useState(null)
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBookAndUser = async () => {
      const book = await bookRequests.getByBookId(id);
      setBook(book);
      const response = window.localStorage.getItem("user");
      const loggedUser = JSON.parse(response);
      if (!loggedUser.userId) {
        setLoggedInUser(null);
      }
      if (loggedUser.userId) {
        const user = await userRequests.getById(loggedUser.userId);
        setLoggedInUser(user);
      }
      const user = await userRequests.getById(book.userId)
      setUser(user)
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
      <div>
        <h1>{book.title}</h1>
        <h3>by {book.author}</h3>
        <p>{book.comment}</p>
        <p>{book.rating}</p>
        <a className="hover:text-sky-400" target="_blank" href={book.url}>
          See on the internet
        </a>
      </div>
    );
  }

  return (
    <div className="pt-24 ps-32 flex flex-col items-start bg-gradient-to-r from-teal-800 via-teal-600 to-teal-400">
      <p>You added this book in 2024</p>
      <h1 className="pt-10">{book.title}</h1>
      <div className="p-10">
        <p className="text-stone-800 font-semibold text-lg">By {book.author}</p>
        <p className="font-semibold">Rating: {book.rating} out of 5</p>
        <a className="hover:text-teal-200" target="_blank" href={book.url}>
          See on the internet
        </a>
      </div>

      <div className="p-10">
        <p className="transition duration-150 place-content-center w-96 p-5 rounded-md border-double border-4 border-teal-600 hover:border-emerald-300 bg-white text-sm text-black">
          {book.comment}
        </p>
      </div>

      <div className="p-10">
        <button
          className="transition duration-150 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200"
          onClick={handleClick}
        >
          Delete book
        </button>
      </div>
    </div>
  );

  // add rote for seeing the user that added the book
};
