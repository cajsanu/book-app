import { useEffect, useState } from "react";
import bookRequests from "../requests/books";
import { Books } from "../components/Books";

export const AllBooks = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      const books = await bookRequests.getAll();
      setBooks(books);
    };
    getBooks();
  }, []);

  if (!books) {
    return <div>No books found</div>;
  }

  return (
    <div className="p-20 bg-teal-800">
      <h1 className="pb-10">All the books</h1>
      <div className="flex justify-center">
        <Books books={books} />
      </div>
    </div>
  );
};
