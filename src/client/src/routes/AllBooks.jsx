import { useEffect, useState } from "react";
import bookRequests from "../requests/books";
import { Books } from "../components/Books";

export const AllBooks = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      const books = await bookRequests.getAll();
      console.log(books);
      setBooks(books);
    };
    getBooks();
  }, []);

  if (!books) {
    return <div>No books found</div>;
  }

  return (
    <>
      <Books books={books} />
    </>
  );
};
