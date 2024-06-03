import { useState } from "react";
import { useNavigate } from "react-router";
import bookRequests from "../requests/books";

export const BookForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  // make year so it cannot be negative
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const createBook = (event) => {
    event.preventDefault();
    if (!title || !author || !year || !url || !rating) {
      throw new Error("All fields except for comment need to be filled in");
    }
    bookRequests.create({
      title: title,
      author: author,
      url: url,
      year: year,
      rating: rating,
      comment: comment,
    });
    setTitle("");
    setAuthor("");
    setYear("");
    setUrl("");
    setRating("");
    setComment("");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-teal-600">
          Add a new book to your collection
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={createBook}>
          <div>
            <label className="block text-sm font-medium leading-6 text-teal-200">
              Title
            </label>
            <div className="mt-2">
              <input
                id="Title"
                name="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"                />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-teal-200">
              Author
            </label>
            <div className="mt-2">
              <input
                id="author"
                name="author"
                type="text"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-teal-200">
              Url
            </label>
            <div className="mt-2">
              <input
                id="url"
                name="url"
                type="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"                  />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-teal-200">
              Year
            </label>
            <div className="mt-2">
              <input
                id="Year"
                name="Year"
                type="text"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"                  />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-teal-200">
              Rating
            </label>
            <select className="text-black text-sm font-medium" onChange={(event) => setRating(event.target.value)}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-teal-200">
              Comment
            </label>
            <div className="mt-2">
              <input
                id="Comment"
                name="Comment"
                type="text"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"                  />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
