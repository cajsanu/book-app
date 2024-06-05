import { useState } from "react";
import bookRequests from "../requests/books";

export const UpdateComment = ({ book }) => {
  const [comment, setComment] = useState("");

  const updateComment = async (event) => {
    event.preventDefault();
    const addedComment = await bookRequests.updateComment(book.id, {
      ...book,
      comment: comment,
    });
    console.log(addedComment);
    setComment("");
  };

  return (
    <div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={updateComment}>
          <div>
            <label className="block text-sm font-medium leading-6 text-teal-600 flex justify-right">
              New comment
            </label>
            <div className="mt-2">
              <input
                name="comment"
                type="text"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"
              />
            </div>
          </div>
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};
