import { useNavigate } from "react-router-dom";
import readingListRequests from "../requests/readingList";
import AlertContext from "../contexts/AlertContext";
import { useContext } from "react";

export const AddToReadingList = ({ userId, bookId }) => {
  const handleClick = async () => {
    const added = await readingListRequests.create(userId, bookId);
    console.log(added)
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
