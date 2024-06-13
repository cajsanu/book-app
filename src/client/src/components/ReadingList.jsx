import readingListRequests from "../requests/readingList";
import AlertContext from "../contexts/AlertContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ title, author, year, bookId, listId, onRemove }) => {
  const [alert, alertDispatch] = useContext(AlertContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (
      window.confirm(
        `Are you sure you want to remove ${title} from your reading list?`
      )
    ) {
      try {
        await readingListRequests.remove(listId);
        alertDispatch({
          type: "READ",
          payload: `Removed ${title} from reading list`,
        });
        onRemove();
      } catch (err) {
        if (err.response.status === 401) {
          window.localStorage.setItem("user", null);
          navigate("/");
          alertDispatch({
            type: "ERROR",
            payload: "Session expired. Please log in",
          });
        }
      }
    }
  };

  return (
    <tr className="text-stone-800 hover:bg-emerald-100 font-medium text-start shadow-sm">
      <td className="p-4 ps-20 w-40 ">
        <a
          className="flex justify-start hover:text-teal-600"
          href={`/books/${bookId}`}
        >
          {title}
        </a>
      </td>
      <td className="p-4 w-40 ps-20">
        <p className="flex justify-start">{author}</p>
      </td>
      <td className="p-4 w-40 ps-20">{year}</td>
      <td className="p-4 w-40 ps-20">
        <button
          onClick={handleClick}
          className="transition delay-150 duration-300 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export const ReadingList = ({ books, onRemove }) => {
  return (
    <div className="w-5/6 shadow-xl">
      <table className="w-full p-10 bg-emerald-50">
        <thead>
          <tr className="text-white bg-teal-900 shadow-sm">
            <th className="text-start p-4 ps-20">Title</th>
            <th className="text-start ps-20">Author</th>
            <th className="text-start ps-20">Published</th>
            <th className="text-start ps-20">Remove from reading list</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <Book
              key={b.id}
              title={b.title}
              author={b.author}
              year={b.year}
              bookId={b.user_reading_list.bookId}
              listId={b.user_reading_list.id}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
