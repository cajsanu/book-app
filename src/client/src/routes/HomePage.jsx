import "../App.css";
import { useNavigate } from "react-router";
import { LoginForm } from "../components/LoginForm";
import { Footer } from "../components/Footer";

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
          className="h-48 w-full bg-center bg-sky-500/50 opacity-60"
          style={{ backgroundImage: `url('src/images/books.jpeg')` }}
        ></div>
        <div className="ps-60 pe-60 pt-32 flex flex-row">
          <div className="flex justify-start">
            <div className="text-base/loose flex-col">
              <h1 className="text-5xl font-bold text-center">OmaKirja</h1>
              <div className="p-10">Lorem ipsum dolor sit amet</div>
              <div>
              </div>
              <div className="bg-inherit h-10">
                <div className="flex flex-row justify-center">
                  <div>
                    <button
                      className="p-2 hover:text-teal-400 rounded-full bg-teal-600"
                      onClick={handleClickUsers}
                    >
                      Users
                    </button>
                    <button
                      className="p-2 hover:text-teal-400 rounded-full bg-teal-600"
                      onClick={handleClickBooks}
                    >
                      Books
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-grow pt-10">
            <div className="w-1/2 ">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 flex justify-start">
        <Footer />
      </div>
    </div>
  );
};
