import { useNavigate } from "react-router-dom";
import reviewRequests from "../requests/reviews";
import AlertContext from "../contexts/AlertContext";
import { useContext } from "react";

export const DeleteButton = ({ reviewId, userId }) => {
  const navigate = useNavigate();
  const [alert, alertDispatch] = useContext(AlertContext);

  const handleClick = async () => {
    if (window.confirm("Are you sure you want to delete this book")) {
      try {
        console.log("removing");
        const removed = await reviewRequests.remove(reviewId);
        console.log(removed);
        navigate(`/user/${userId}`);
        alertDispatch({ type: "DELETE", payload: "Deleted book successfully" });
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
    <div>
      <button
        className="transition duration-150 rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 hover:text-teal-800"
        onClick={handleClick}
      >
        Delete book
      </button>
    </div>
  );
};
