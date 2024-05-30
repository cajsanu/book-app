import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookRequests from "../requests/books"

export const Book = () => {
  const [book, setBook] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const getBook = async () => {
      const book = await bookRequests.getByBookId(id);
      setBook(book);
    };
    getBook();
  }, []);

  if (!book) {
    return <div>No book found</div>
  }

  // add rote for seeing the user that added the book
  return (
    <>
      <h1>{book.title}</h1>
      <h3>by {book.author}</h3>
      <p>{book.comment}</p>
      <p>{book.rating}</p>
      <a className="hover:text-sky-400" target="_blank" href={book.url}>See on the internet</a>
    </>
  );
};
