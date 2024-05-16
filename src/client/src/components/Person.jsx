import { useNavigate } from "react-router";

export const Person = ({ name, age, img }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${name}`)
    }

    return (
      <div>
        <a>
          <img className="pic" src={`src/images/${img}`} alt={`${name}'s picture`} />
        </a>
        <p> {name}, {age} </p>
        <p className="click">
          <button onClick={handleClick}>{`${name}'s books`}</button>
        </p>
      </div>
    );
  };