import { useNavigate } from "react-router";

const Book = ({ title, author, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/books/${id}`);
  };

  return (
    <div>
      <ul>
        <h2>{title}</h2>
        <p>by {author}</p>
        <button
          className="transition delay-150 duration-300 flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          onClick={handleClick}
        >
          Read more
        </button>
      </ul>
    </div>
  );
};

export const Books = ({ books }) => {
  return (
    <div className="p-10">
      {books.map((b) => (
        <Book key={b.id} title={b.title} author={b.author} id={b.id} />
      ))}
    </div>
  );
};
