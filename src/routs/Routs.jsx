import Root from "../layouts/Root"
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../pages/ErrorElement";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import TouristSpot from "../pages/TouristSpot";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/", 
                element: <Home></Home>
            },
            {
                path: "/touristSpot",
                element: <TouristSpot></TouristSpot>
            },
            {
                path: "/login",
                element: <Login></Login>
            }, 
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);