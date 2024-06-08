import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import userRequests from "../requests/users";
import { BackButton } from "./BackButton";
import { Notification } from "../components/Alert"
import AlertContext from "../contexts/AlertContext";

export const UserForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("")
  const [password, setPassword] = useState("");
  const [alert, alertDispatch] = useContext(AlertContext);

  const createUser = (event) => {
    try {
      event.preventDefault();
      const newUser = userRequests.create({ name: name, username: username, age: Number(age), password: password });
      navigate("/")
      alertDispatch({ type: "SIGNUP", payload: username})
      setName("");
      setUsername("");
      setPassword("");
    } catch (err) {
      alertDispatch({type: "ERROR", payload: "Unable to create new user"})
    }
  
  };

  return (
    <div className="shadow-xl w-2/4 flex-col justify-center px-6 py-12 lg:px-8 border-double border-8 border-teal-300 bg-emerald-100">
      <div className="">
        <Notification />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-teal-600">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={createUser}>
          <div>
            <label className="block text-sm font-medium leading-6 text-teal-600 flex justify-right">
              Name
            </label>
            <div className="mt-2">
              <input
                id="Name"
                name="Name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-teal-600 flex justify-right">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-teal-600 flex justify-right">
              Age
            </label>
            <div className="mt-2">
              <input
                id="age"
                name="age"
                type="text"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-teal-600 flex justify-right"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-black focus:ring-2 focus:ring-inset focus:ring-teal-200"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="transition delay-150 duration-300 flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Sign up
            </button>
            <br />
            <div>
              <BackButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
