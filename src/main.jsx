import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Registration from "./components/Registration/Registration.jsx";
import Contact from "./components/Contact/Contact.jsx"
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/Courses",
        element: <Courses></Courses>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Registation",
        element: <Registration></Registration>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
