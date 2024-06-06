import "../App.css";
import { useNavigate } from "react-router";
import { LoginForm } from "../components/LoginForm";
import { Footer } from "../components/Footer";
import { Notification } from "../components/Alert";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClickUsers = () => {
    navigate("/users");
  };
  const handleClickBooks = () => {
    navigate("/books");
  };

  return (
    <div>
      <div className="h-screen w-full bg-gradient-to-r from-teal-500 to-teal-800">
        <div
          className="h-40 w-full bg-center bg-sky-500/50 opacity-70"
          style={{ backgroundImage: `url('src/images/books.jpeg')` }}
        ></div>
        <Notification />
        <div className="ps-60 pe-20 pt-32 flex flex-row">
          <div className="flex justify-start pe-28 max-w-96">
            <div className="flex-col">
              <h1 className="text-6xl font-bold text-center">OmaKirja</h1>
              <div className="p-10 font-medium">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. </div>
              <div></div>
              <div className="bg-inherit h-10">
                <div>
                  <div className="flex flex-col">
                    <button
                      className="transition delay-150 rounded-md bg-emerald-100 px-3 py-1.5 text-sm font-semibold leading-6 text-teal-700 shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                      onClick={handleClickUsers}
                    >
                      Users
                    </button>
                    <br />
                    <button
                      className="transition delay-150 rounded-md bg-emerald-100 px-3 py-1.5 text-sm font-semibold leading-6 text-teal-700 shadow-sm hover:bg-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                      onClick={handleClickBooks}
                    >
                      Books
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-grow pb-16">
            <div className="w-3/4 ">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 pt-20 flex justify-start">
        <Footer />
      </div>
    </div>
  );
};
