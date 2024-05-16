import { useNavigate } from "react-router";

const Book = ({ title, author, id }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/book/${id}`)
    }

  return (
    <div>
        <ul>
            <li>{title} by {author}</li>
        </ul>
        <button onClick={handleClick}>Read more</button>
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
