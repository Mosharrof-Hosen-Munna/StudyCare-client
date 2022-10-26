import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [{
        path:'/',
        element: <Home/>
      },
      {
        path:'/home',
        element: <Home/>
      },
      {
        path:'/courses',
        element: <PrivateRoute><Courses/></PrivateRoute>
      },
      {
        path:'/register',
        element: <Register/>
      },
      {
        path:'/login',
        element: <Login/>
      },{
        path:'*',
        element:<NotFound/> 
      }]
    },
  ]);

  export default routes