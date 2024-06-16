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
      <div className="bg-gradient-to-r from-teal-400 to-teal-800">
        <div
          className="h-40 w-full bg-center bg-sky-500/50 opacity-70"
          style={{ backgroundImage: "url('../books.jpeg')" }}
        ></div>
        <Notification />
        <ToLoggedIn />
        <div className="pt-32 pb-24 flex flex-row flex-wrap justify-around gap-y-10">
          <div className="flex justify-start max-w-96">
            <div className="flex-col">
              <h1 className="text-6xl text-white font-bold text-center">BookShelf</h1>
              <div className="p-10 font-medium text-white">
                &quot;If you don&apos;t like to read, you haven&apos;t found the
                right book.&quot; - J.K. Rowling
              </div>
              <div className="bg-inherit">
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
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};
