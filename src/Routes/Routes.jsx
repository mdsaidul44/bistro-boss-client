import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUser from "../pages/Dashboard/AllUsers/AllUser";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRouter from "./AdminRouter";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path: 'menu',
          element: <Menu/>
        },
        {
          path: 'order/:category',
          element: <Order/>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path : 'secret',
          element: <PrivateRoute><Secret/></PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // user
         {
          path: 'cart',
          element: <Cart></Cart>
         },


        //  Admin user
         {
          path: 'additems',
          element:<AdminRouter><AddItems/></AdminRouter>
         },
         {
          path: 'manageitem',
          element: <AdminRouter><ManageItem/></AdminRouter>
         },
        {
          path: 'users',
          element: <AllUser/>
        }
      ]
    }
  ]);