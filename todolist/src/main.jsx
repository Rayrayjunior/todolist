import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App";
import Home from "./pages/Home";
import Task from "./pages/Tasks";
import Notfound from "./pages/NotFound";

const router = createBrowserRouter([
    {
      path:"/",
      element: <App />,

      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "tasks",
          element: <Task />
        },
        {
          path: "not-found",
          element: <Notfound />
        }
      ]
    }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);