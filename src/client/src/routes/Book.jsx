import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookRequests from "../requests/books"

export const Book = () => {
  const [book, setBook] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const getBook = async () => {
      const book = await bookRequests.getByBookId(id);
      console.log(book);
      setBook(book);
    };
    getBook();
  }, []);

  if (!book) {
    return <div>No book found</div>
  }

  return (
    <>
      <h2>{book.title}</h2>
      <h3>by {book.author}</h3>
      <p>{book.description}</p>
    </>
  );
};
