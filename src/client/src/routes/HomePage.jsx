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
        <div>
          <div className="text-base/loose pt-10">
            <h1 className="text-5xl font-bold text-center pt-20">OmaKirja</h1>
            <div className="p-10">Lorem ipsum dolor sit amet</div>
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

            <div className="p-1 w-96">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 flex justify-start">
        <Footer />
      </div>
    </div>
  );
};
