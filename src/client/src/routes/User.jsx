import { useParams } from "react-router-dom";
import { Books } from "../components/Books";
import userRequests from "../requests/users";
import { useEffect, useState } from "react";
import { ToLoggedIn } from "../components/ToLoggedIn";

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
        <a className="hover:text-teal-300 underline" href={""}>
          About {user.name}
        </a>
      </div>

      <div className="p-10 flex justify-center">
        <Books books={user.books} />
      </div>
    </div>
  );
};
