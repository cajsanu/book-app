import { useNavigate } from "react-router-dom";
import bookRequests from "../requests/books";
import AlertContext from "../contexts/AlertContext";
import { useContext } from "react";

export const DeleteButton = ({ bookId, userId }) => {
  const navigate = useNavigate();
  const [alert, alertDispatch] = useContext(AlertContext);

  const handleClick = () => {
    if (window.confirm("Are you sure you want to delete this book")) {
      bookRequests.remove(bookId);
      navigate(`/user/${userId}`);
      alertDispatch({ type: "DELETE", payload: "Deleted book successfully" });
    }
  };

  return (
    <div>
      <button
        className="transition duration-150 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200"
        onClick={handleClick}
      >
        Delete book
      </button>
    </div>
  );
};
