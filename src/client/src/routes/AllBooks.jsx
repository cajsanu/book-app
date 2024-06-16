import { useEffect, useState } from "react";
import bookRequests from "../requests/books";
import { Books, Footer, ToLoggedIn } from "../components";

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
    <div>
      <ToLoggedIn />
      <div className="p-3 lg:p-20 pt-10 bg-teal-800 text-white">
        <h1 className="pb-10">All the books</h1>
        <div className="pb-10">
          <p>Here you can see all of the books added by users.</p>
          <p>
            If you want to see books added by a specific user, please navigate
            to the users page.
          </p>
          <p>If you want to read more about a book you can click the title.</p>
        </div>
        <div className="flex justify-center">
          <Books books={books} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
