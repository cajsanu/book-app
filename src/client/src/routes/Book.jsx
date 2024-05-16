import { useParams } from "react-router-dom";

const book = {
  title: "My first book",
  author: "Me",
  description: "It was awesome!",
};

export const Book = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <h2>{book.title}</h2>
      <h3>by {book.author}</h3>
      <p>{book.description}</p>
    </>
  );
};
