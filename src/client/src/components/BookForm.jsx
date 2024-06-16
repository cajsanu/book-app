import { useState, useContext, useEffect } from "react";
import { Autocomplete, TextField, styled } from "@mui/material";
import { useNavigate } from "react-router";
import bookRequests from "../requests/books";
import AlertContext from "../contexts/AlertContext";
import { useDebounce } from "../hooks/useDebounce";
import { set } from "lodash";

const StyledAutocomplete = styled(Autocomplete)(() => ({
  ".MuiOutlinedInput-root": {
    padding: 0,
    border: 0,
    outline: 0,
  },
  ".MuiAutocomplete-inputFocused": {
    padding: 0,
    border: 0,
    outline: 0,
    "&:focus": {
      ring: "1px solid #2563EB",
    },
  },
}));

export const BookForm = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [alert, alertDispatch] = useContext(AlertContext);

  const debouncedSearch = useDebounce(title, 700);
  useEffect(() => {
    const fetchBooks = async () => {
      if (debouncedSearch && debouncedSearch.length > 2) {
        const searchedBooks = await bookRequests.getAll(debouncedSearch);
        setBooks(searchedBooks);
      } else {
        setBooks([]);
      }
    };
    fetchBooks();
  }, [debouncedSearch]);

  const createBook = async (event) => {
    try {
      event.preventDefault();
      if (!title || !author || !year) {
        window.scrollTo(0, 0);
        alertDispatch({
          type: "ERROR",
          payload: "All fields need to be filled",
        });
        throw new Error("All fields except for comment need to be filled in");
      }
      if (Number(year) < 0 || Number(year) > 2024) {
        window.scrollTo(0, 0);
        alertDispatch({
          type: "ERROR",
          payload: "Year must be a number between 0-2024",
        });
        throw new Error("Year must be a number between 0-2024");
      }
      const newBook = await bookRequests.create({
        title: title,
        author: author,
        year: year,
        rating: rating,
        comment: comment,
      });
      setTitle("");
      setAuthor("");
      setYear("");
      setRating(0);
      setComment("");
      alertDispatch({ type: "CREATE", payload: "successfully" });
      navigate(`/books/${newBook.id}`);
    } catch (err) {
      window.localStorage.setItem("user", null);
      navigate("/");
      alertDispatch({
        type: "ERROR",
        payload: "Session expired. Please log in",
      });
    }
  };

  return (
    <div className="md:w-5/6 lg:w-3/6 p-16 border-double border-8 border-teal-200 bg-teal-800 shadow-xl">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-emerald-100">
        Add a new book to your collection
      </h2>
      <div className="mt-16 sm:mx-auto sm:w-full">
        <form className="space-y-6" onSubmit={createBook}>
          <div>
            <label className="block text-sm font-medium leading-6 text-emerald-100">
              Title
            </label>
            <div className="mt-2">
              <StyledAutocomplete
                className="rounded-md bg-white"
                freeSolo
                options={books || []}
                getOptionLabel={(book) => book.title}
                renderInput={(params) => (
                  <TextField {...params} required
                  className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"
                  />
                )}
                getOptionKey={(book) => book.id}
                inputValue={title}
                filterOptions={(x) => x}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                value={selectedBook}
                onChange={(_, value) => {
                  setSelectedBook(value);
                  setTitle(value.title);
                  setAuthor(value.author);
                  setYear(value.year);
                }}
                onInputChange={(event, value) => {
                  setTitle(value);
                }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-emerald-100">
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
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-emerald-100">
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
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-emerald-100">
              Rating
            </label>
            <select
              className="text-black text-sm font-medium"
              onChange={(event) => setRating(event.target.value)}
              value={rating}
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-emerald-100">
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
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"
              />
            </div>
          </div>

          <div className="pb-5">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
