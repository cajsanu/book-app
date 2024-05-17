import { useNavigate } from "react-router";

export const Person = ({ name, age, img }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/books/${name}`)
    }

    return (
      <div className="person">
        <a>
          <img className="pic" src={`src/images/${img}`} alt={`${name}'s picture`} />
        </a>
        <p> {name}, {age} </p>
          <button onClick={handleClick}>{`${name}'s books`}</button>
      </div>
    );
  };