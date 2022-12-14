import { createBrowserRouter } from "react-router-dom";
import CoursesLayout from "../Layout/CoursesLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
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
        path:'/blog',
        element: <Blog/>
      },
      {
        path:'/faq',
        element: <FAQ/>
      },
      {
        path:'/courses',
        element: <CoursesLayout/>,
        children:[
          {
            path:'/courses',
            element: <Courses/>
          },
          {
            path:'/courses/details/:courseId',
            element: <CourseDetails/>,
            loader: async({params})=>{
              return fetch(`https://educational-server-mosharrof-hosen-munna.vercel.app/courses/${params.courseId}`)
            }
          },
          {
            path:'/courses/checkout/:courseId',
            element: <PrivateRoute><CheckOut/></PrivateRoute>,
            loader: async({params})=>{
              return fetch(`https://educational-server-mosharrof-hosen-munna.vercel.app/courses/${params.courseId}`)
            }
          },
        ]
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