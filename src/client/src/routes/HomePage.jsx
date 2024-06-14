import "../App.css";
import {
  LoginForm,
  Footer,
  Notification,
  ToLoggedIn,
  ToUsers,
  ToBooks,
} from "../components";

export const HomePage = () => {
  return (
    <div>
      <div className="h-screen w-full bg-gradient-to-r from-teal-400 to-teal-800">
        <div
          className="h-40 w-full bg-center bg-sky-500/50 opacity-70"
          style={{ backgroundImage: "url('../books.jpeg')" }}
        ></div>
        <Notification />
        <ToLoggedIn />
        <div className="ps-60 pe-20 pt-32 flex flex-row">
          <div className="flex justify-start pe-28 max-w-96">
            <div className="flex-col">
              <h1 className="text-6xl font-bold text-center">BookShelf</h1>
              <div className="p-10 font-medium">
                &quot;If you don&apos;t like to read, you haven&apos;t found the
                right book.&quot; - J.K. Rowling
              </div>
              <div className="bg-inherit h-10">
                <div>
                  <div className="flex flex-col">
                    <ToUsers />
                    <br />
                    <ToBooks />
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
