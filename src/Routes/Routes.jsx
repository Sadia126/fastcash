import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/MainLayouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Bills from "../Pages/Bills/Bills/Bills";
import BillDetails from "../Pages/Bills/BillDetails/BillDetails";
import MyProfile from "../Pages/Myprofile/MyProfile/MyProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },{
          path:"/bills",
          element:<PrivateRoute><Bills></Bills></PrivateRoute>
        },{
          path:"/bill/:id",
          element: <PrivateRoute><BillDetails></BillDetails></PrivateRoute>
        },{
          path:"/profile",
          element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        }
      ]
    },{
      path:"/login",
      element: <Login></Login>
    },{
      path:"/register",
      element:<Register></Register>
    }
  ]);