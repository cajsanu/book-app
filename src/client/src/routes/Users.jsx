import { useEffect, useState } from "react";
import "../App.css";
import { Person } from "../components/Person";
import userRequests from "../requests/users"

export const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const users = await userRequests.getAll()
      setUsers(users)
    }
    getUsers()
  }, [])

    return (
      <>
        <h1>Users</h1>
        <div className="flex justify-center p-10">
          {users.map((u) => (
            <Person key={u.id} name={u.name} img={`IMG_${u.name}.jpg`} age={u.age} id={u.id}/>
          ))}
        </div>
      </>
    );
  };