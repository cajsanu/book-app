import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ErrorPage,
  HomePage,
  User,
  Users,
  Book,
  AllBooks,
  LoggedIn,
  SignUp,
} from "./routes";
import "./index.css";
import { AlertContextProvider } from "./contexts/AlertContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/:id",
    element: <LoggedIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <Users />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users/:id",
    element: <User />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/books",
    element: <AllBooks />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/books/:id",
    element: <Book />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertContextProvider>
      <RouterProvider router={router} />
    </AlertContextProvider>
  </React.StrictMode>
);
