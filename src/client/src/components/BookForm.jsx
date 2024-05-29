import { useState } from "react";
import { useNavigate } from "react-router";
import bookRequests from "../requests/books";

export const BookForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const createBook = (event) => {
    event.preventDefault();
    bookRequests.create({ title: title });
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div className="bookform">
      <p></p>
      <form onSubmit={createBook}>
        <div>
          title
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          author
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div>
          url
          <input
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>
        <div>
          year
          <input
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
        </div>
        <div>
          rating
          <label>1</label>
          <input
            type="radio"
            name="visibility"
            onChange={() => setRating(1)}
          />
          <label>2</label>
          <input
            type="radio"
            name="visibility"
            onChange={() => setRating(2)}
          />
         <label>3</label>
          <input
            type="radio"
            name="visibility"
            onChange={() => setRating(3)}
          />
           <label>4</label>
          <input
            type="radio"
            name="visibility"
            onChange={() => setRating(4)}
          />
          <label>5</label>
          <input
            type="radio"
            name="visibility"
            onChange={() => setRating(5)}
          />
        </div>
        <div>
          comment
          <input
            type="text"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
