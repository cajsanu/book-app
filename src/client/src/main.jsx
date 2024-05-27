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
    path: "/users/:id",
    element: <User />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/books/:id",
    element: <Book />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
