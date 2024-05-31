import "../App.css";
import { useNavigate } from "react-router";
import { Menu } from "../components/Menu";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClickUsers = () => {
    navigate("/users");
  };
  const handleClickBooks = () => {
    navigate("/books");
  };

  return (
    <div className="h-screen w-full container mx-auto">
      <div className="rounded-md bg-teal-800 h-10">
        <div className="p-1 flex flex-row justify-between">
          <div>
            <button className="rounded-md bg-teal-900 p-1 hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300" onClick={handleClickUsers}>Users</button>
            <button className="rounded-md bg-teal-900 p-1 hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300" onClick={handleClickBooks}>Books</button>
          </div>
          <div className="p-1">
            <Menu />
          </div>
        </div>
      </div>
      <div
        className="rounded-md h-40 w-full bg-center bg-sky-500/50 opacity-40"
        style={{ backgroundImage: `url('src/images/books.jpeg')` }}
      ></div>
      <div>
        <div className="text-base/loose pt-10">
          <h1 className="text-5xl font-bold text-center">Book App</h1>
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
    </div>
  );
};
