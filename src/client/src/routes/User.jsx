import { useParams } from "react-router-dom";
import { Books } from "../components/Books";

const books = [
  {
    title: "My great book",
    author: "Knytte",
    id: 1
  },
  {
    title: "My not so great book",
    author: "Pyre",
    id: 2
  },
  {
    title: "The last book",
    author: "Myself",
    id: 3
  }
]

export const User = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>{name}'s books</h1>
      <p>Here are my books that I have read</p>
      <Books books={books}/>
      <p>And here are the ones I want to read next</p>
      <Books books={books}/>
    </div>
  );
};

// change name to user id when possible!
