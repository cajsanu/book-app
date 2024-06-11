import { useState, useContext } from "react";
import bookRequests from "../requests/books";
import { useNavigate } from "react-router-dom";
import AlertContext from "../contexts/AlertContext";

export const UpdateComment = ({ book, onCommentUpdate }) => {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const [alert, alertDispatch] = useContext(AlertContext);

  const updateComment = async (event) => {
    try {
      event.preventDefault();
      await bookRequests.updateComment(book.id, {
        ...book,
        comment: comment,
      });
      setComment("");
      onCommentUpdate();
    } catch (err) {
      window.localStorage.clear()
      navigate("/");
      alertDispatch({
        type: "ERROR",
        payload: "Session expired. Please log in",
      });
    }
  };

  return (
    <div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={updateComment}>
          <div>
            <label className="block font-medium leading-6 text-teal-900 flex justify-right">
              New comment
            </label>
            <div className="text-sm">
              Obs. making a new comment will replace the old one
            </div>
            <div className="mt-2">
              <textarea
                name="comment"
                type="text"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                required
                className="block resize w-full rounded-md border-0 py-1.5 text-black text-sm focus:ring-2 focus:ring-inset focus:ring-teal-200"
              ></textarea>
            </div>
          </div>
          <button
            className="transition duration-150 w-full rounded-md bg-teal-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
