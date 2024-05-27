import { useParams } from "react-router-dom";
import { Books } from "../components/Books";
import userRequests from "../requests/users";
import bookRequests from "../requests/books";
import { useEffect, useState } from "react";

export const User = () => {
  const [user, setUser] = useState([])
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const getUser = async () => {
      const user = await userRequests.getById(id)
      console.log(user);
      setUser(user)
    };
    getUser()
  }, [])

  useEffect(() => {
    const getBooks = async () => {
      const books = await bookRequests.getByUserId(id)
      console.log(books)
    };
    getBooks()
  }, [])

  //getting the user doesn't work. The api endpoint or smth is wrong but in Users it works...

  return (
    <div>
      <h1>{name}'s books</h1>
      {/* <p>Here are my books that I have read</p>
      <Books books={books} />
      <p>And here are the ones I want to read next</p>
      <Books books={books} /> */}
    </div>
  );
};

