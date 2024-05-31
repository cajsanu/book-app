import { useState } from "react";
import { login } from "../requests/login";
import { useNavigate } from "react-router-dom";
import { BackButton } from "./BackButton";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const logIn = async (event) => {
    event.preventDefault();
    const data = await login({ username: username, password: password });
    setUsername("");
    setPassword("");
    navigate(`/user/${data.id}`);
  };

  // need to check that the route /signup works

  return (
    <div className="pb-20 py-12 lg:px-10 border-double border-8 border-teal-300 bg-emerald-100">
      <div className="">
        <h2 className="mt-10 text-2xl font-bold tracking-tight text-teal-600">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={logIn}>
          <div>
            <label className="block text-sm font-medium leading-6 text-teal-600 flex justify-right">
              Username
            </label>
            <div className="mt-2">
              <input
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
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-teal-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="transition delay-150 duration-300 flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Sign up!
          </a>
        </p>
      </div>
    </div>
  );
};
