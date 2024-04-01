import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Registration from "./components/Registration/Registration.jsx";

import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import ContactUsPage from "./components/Contact/ContactUsPage.jsx";

import Books from "./components/Books/Books.jsx";

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
        path: "/registration",
        element: <Registration></Registration>,
      },

      {
        path: "/contactuspage",
        element: <ContactUsPage></ContactUsPage>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
