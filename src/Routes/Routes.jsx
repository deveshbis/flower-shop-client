import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/shop",
            element: <Shop/>
        },
        {
            path: "/blog",
            element: <Blog/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
      ]
    },
  ]);