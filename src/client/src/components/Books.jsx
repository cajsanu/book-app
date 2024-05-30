import { useNavigate } from "react-router";

const Book = ({ title, author, id }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/books/${id}`)
    }

  return (
    <div>
        <ul>
            <h2>{title}</h2>
            <p>by {author}</p>
            <button onClick={handleClick}>Read more</button>
        </ul>
    </div>
  );
};

export const Books = ({ books }) => {
  return (
    <div>
      {books.map((b) => (
        <Book key={b.id} title={b.title} author={b.author} id={b.id}/>
      ))}
    </div>
  );
};
