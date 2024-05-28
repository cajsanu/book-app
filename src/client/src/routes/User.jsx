import { useParams } from "react-router-dom";
import { Books } from "../components/Books";
import userRequests from "../requests/users";
import { useEffect, useState } from "react";

export const User = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const user = await userRequests.getById(id);
      console.log(user);
      setUser(user);
    };
    getUser();
  }, []);

  if (!user) {
    return <div>No user found</div>
  }

  return (
    <div>
      <h1>{user.name}'s books</h1>
      <p>Here are my books that I have read</p>
      <Books books={user.books} />
      {/* <p>And here are the ones I want to read next</p>
      <Books books={books} /> */}
    </div>
  );
};
