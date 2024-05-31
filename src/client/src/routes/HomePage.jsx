import "../App.css";
import { useNavigate } from "react-router";
import { Menu } from "../components/Menu";
import { LoginForm } from "../components/LoginForm"

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClickUsers = () => {
    navigate("/users");
  };
  const handleClickBooks = () => {
    navigate("/books");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-teal-400 via-teal-600 to-teal-800">
   
      <div
        className="h-48 w-full bg-center bg-sky-500/50 opacity-60"
        style={{ backgroundImage: `url('src/images/books.jpeg')` }}
      ></div>
      <div>
        <div className="text-base/loose pt-10">
          <h1 className="text-5xl font-bold text-center pt-20">OmaKirja</h1>
          <div className="p-10">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
            ea commodi consequat. Quis aute iure reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div className="bg-inherit h-10">
        <div className="p-1 flex flex-row justify-around">
          <div>
            <button
              className="p-1 hover:text-teal-400 rounded-full bg-teal-600"
              onClick={handleClickUsers}
            >
              Users
            </button>
            <button
              className="p-1 hover:text-teal-400 rounded-full bg-teal-600"
              onClick={handleClickBooks}
            >
              Books
            </button>
          </div>
          <div>
            <p className="p-1">logo and name</p>
          </div>
          <div className="p-1">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
