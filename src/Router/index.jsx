import {
    createBrowserRouter,
  } from "react-router-dom";
import CreateAccount from "../CreateAccount";
import Login from "../Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
        path: "/createaccount",
        element: <CreateAccount/>,
      },
  ]);

  