import { useState } from "react";
import { useNavigate } from "react-router";
import userRequests from "../requests/users";
import { BackButton } from "./BackButton";

export const UserForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (event) => {
    event.preventDefault();
    userRequests.create({ name: name, username: username, password: password });
    setName("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="shadow-xl w-2/4 flex-col justify-center px-6 py-12 lg:px-8 border-double border-8 border-teal-300 bg-emerald-100">
      <div className="">
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
            <div className="transition delay-150 duration-300 flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
              <BackButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
