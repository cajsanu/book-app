

export const Person = ({ name, age, img }) => {
    return (
      <div>
        <a>
          <img className="pic" src={`src/images/${img}`} alt={`${name}'s picture`} />
        </a>
        <p> {name}, {age} </p>
        <p className="click">
          <button text={`${name}'s books`} ></button>
        </p>
      </div>
    );
  };