import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookRequests from "../requests/books";
import userRequests from "../requests/users";
import { useNavigate } from "react-router-dom";

export const Book = () => {
  const [book, setBook] = useState(null);
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const getBookAndUser = async () => {
      const book = await bookRequests.getByBookId(id);
      setBook(book);
      const response = window.localStorage.getItem("user");
      const localUser = JSON.parse(response);
      if (!localUser.userId) {
        setUser(null);
      }
      if (localUser.userId) {
        const user = await userRequests.getById(localUser.userId);
        setUser(user);
      }
    };
    getBookAndUser();
  }, []);

  const handleClick = () => {
    if (window.confirm("Are you sure you want to delete this book")) {
      bookRequests.remove(book.id);
      navigate(`/user/${user.id}`)
    }
  };

  if (!book) {
    return <div>No book found</div>;
  }
  if (!user) {
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
    <div>
      <p>You added this book in 2024</p>
      <h1>{book.title}</h1>
      <h3>by {book.author}</h3>
      <p>{book.comment}</p>
      <p>{book.rating}</p>
      <a className="hover:text-sky-400" target="_blank" href={book.url}>
        See on the internet
      </a>
      <button
        className="transition delay-150 duration-300 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        onClick={handleClick}
      >
        Delete book
      </button>
    </div>
  );

  // add rote for seeing the user that added the book
};
