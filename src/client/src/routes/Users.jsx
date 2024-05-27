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
      setUsers(users)
    }
    getUsers()
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const user = await userRequests.getById(1)
      console.log(user);
    };
    getUser()
  }, [])

  useEffect(() => {
    const getBooks = async () => {
      const books = await bookRequests.getByUserId(1)
      console.log("hello", books)
    };
    getBooks()
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