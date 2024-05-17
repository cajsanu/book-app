import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, HomePage, User, Users, Book } from "./routes";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <Users />,
    errorElement: <ErrorPage />,
  },
  {
    path: "books/:name",
    element: <User />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/book/:id",
    element: <Book />,
    errorElement: <ErrorPage />,
    // maybe change the path to be books/:id. But need to figure out how to make it not show all the books
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
