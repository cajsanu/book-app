import { useState, useContext } from "react";
import reviewRequests from "../requests/reviews";
import { useNavigate } from "react-router-dom";
import AlertContext from "../contexts/AlertContext";

export const UpdateComment = ({ review, onCommentUpdate }) => {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const [alert, alertDispatch] = useContext(AlertContext);

  const updateComment = async (event) => {
    try {
      event.preventDefault();
      await reviewRequests.updateComment(review.id, {
        comment: comment,
      });
      setComment("");
      onCommentUpdate();
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
  };

  return (
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm pt-20">
        <form className="space-y-6" onSubmit={updateComment}>
          <div>
            <label className="font-medium leading-6 text-teal-900 flex justify-content-left">
              New comment
            </label>
            <div className="text-sm flex justify-content-left">
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
            className="transition duration-150 w-full rounded-md bg-teal-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 hover:text-teal-800"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
  );
};
