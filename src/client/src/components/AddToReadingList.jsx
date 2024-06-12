import readingListRequests from "../requests/readingList";
import AlertContext from "../contexts/AlertContext";
import { useContext } from "react";

export const AddToReadingList = ({ userId, bookId }) => {
  const [alert, alertDispatch] = useContext(AlertContext);

  const handleClick = async () => {
    try {
      await readingListRequests.create(userId, bookId);
      alertDispatch({ type: "READ", payload: "Added book to your reading list" });
    } catch (err) {
      alertDispatch({
        type: "ERROR",
        payload: "Unable to add to reading list",
      });
    }
  };

  return (
    <div>
      <button
        className="transition duration-150 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200"
        onClick={handleClick}
      >
        Add to reading list
      </button>
    </div>
  );
};
