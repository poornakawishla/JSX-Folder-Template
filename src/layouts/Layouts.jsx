import React from "react";
import "../index.css";
import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing the Pages
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

function Layouts() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default Layouts;
