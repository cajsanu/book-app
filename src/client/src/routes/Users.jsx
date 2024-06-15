import { useEffect, useState } from "react";
import { Person, Footer, ToLoggedIn } from "../components";
import userRequests from "../requests/users";

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
      <div className="pt-20 bg-gradient-to-r from-teal-500 to-teal-800 text-white">
        <h1 className="">Users</h1>
        <div className="flex flex-row flex-wrap justify-center p-10 overflow-auto">
          {users.map((u) => (
            <Person key={u.id} name={u.name} age={u.age} id={u.id} />
          ))}
        </div>
      </div>
      <div className="p-10 pt-16 flex justify-start">
        <Footer />
      </div>
    </div>
  );
};
