import { useEffect, useState } from "react";
import "../App.css";
import { Person } from "../components/Person";
import userRequests from "../requests/users"
import bookRequests from "../requests/books";

export const Users = () => {
  const [users, setUsers] = useState([])
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const users = await userRequests.getAll()
      console.log(users)
      setUsers(users)
    }
    getUsers()
  }, [])


  // age of the user is kinda missing

    return (
      <>
        <h1>Users</h1>
        <div className="people">
          {users.map((u) => (
            <Person key={u.id} name={u.name} img={`IMG_${u.name}.jpg`} id={u.id}/>
          ))}
        </div>
      </>
    );
  };