export const Person = ({ name, age, id }) => {
const imgSrc = name === "Cajsa" || name === 'Alex' 
  ? `src/images/IMG_${name}.jpg`
  : `src/images/userIcon.jpeg`

  return (
    <div className="p-20">
      <a>
        <img
          className="w-48 h-64 rounded-md outline outline-4 outline-transparent hover:outline-teal-300"
          src={imgSrc}
          alt={`${name}'s picture`}
        />
      </a>
      <p className="pt-5">
        {" "}
        {name}, {age}
      </p>
      <a className="hover:text-teal-300 underline" href={`/users/${id}`}>{`${name}'s books`}</a>
    </div>
  );
};
