import { useParams } from "react-router-dom";
import { Books, ToLoggedIn } from "../components";
import userRequests from "../requests/users";
import { useEffect, useState } from "react";

export const User = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const user = await userRequests.getById(id);
      setUser(user);
    };
    getUser();
  }, []);

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div>
      <ToLoggedIn />
      <div className="pt-10 pb-5 bg-gradient-to-r from-teal-800 to-teal-600">
        <h1 className="p-10">{user.name}&apos;s books</h1>
        <p>Hi there, I&apos;m {user.name}!</p>
        <p>Here are all my books that I have added.</p>
      </div>

      <div className="p-10 flex justify-center">
        <Books books={user.read_books} />
      </div>
    </div>
  );
};
