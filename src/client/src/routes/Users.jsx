import { useEffect, useState } from "react";
import { Person } from "../components/Person";
import userRequests from "../requests/users";
import { Footer } from "../components/Footer";
import { ToLoggedIn } from "../components/ToLoggedIn";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await userRequests.getAll();
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <div>
      <ToLoggedIn />
      <div className="pt-20 bg-gradient-to-r from-teal-500 to-teal-800">
        <h1 className="">Users</h1>
        <div className="flex flex-row p-10 overflow-auto">
          {users.map((u) => (
            <Person key={u.id} name={u.name} age={u.age} id={u.id} />
          ))}
        </div>
      </div>
      <div className="p-10 flex justify-start">
        <Footer />
      </div>
    </div>
  );
};
