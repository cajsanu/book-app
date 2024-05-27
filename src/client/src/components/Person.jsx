import { useNavigate } from "react-router";

export const Person = ({ name, img, id }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/users/${id}`)
    }

    return (
      <div className="person">
        <a>
          <img className="pic" src={`src/images/${img}`} alt={`${name}'s picture`} />
        </a>
        <p> {name} </p>
          <button onClick={handleClick}>{`${name}'s books`}</button>
      </div>
    );
  };