import Root from "../layouts/Root"
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../pages/ErrorElement";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import TouristSpot from "../pages/TouristSpot";
import PrivateRouts from "../layouts/PrivateRouts";
import AddTouristSpot from "../protectedRout/AddTouristSpot";
import MyList from "../protectedRout/MyList";
import Details from "../components/Details";
import UpdateCard from "../components/UpdateCard";
import AddCountries from "../protectedRout/AddCountries";
import TouristInCountry from "../components/TouristInCountry";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/touristSpot')
            },
            {
                path: "/addTourist",
                element: <PrivateRouts><AddTouristSpot></AddTouristSpot></PrivateRouts>
            },
            {
                path: "/addCountries",
                element: <PrivateRouts><AddCountries></AddCountries></PrivateRouts>
            },
            {
                path: "/myList",
                element: <PrivateRouts><MyList></MyList></PrivateRouts>
            },
            {
                path: "/touristSpot",
                element: <TouristSpot></TouristSpot>,
                
            },
            {
                path: "/touristSpot/:id",
                element: <PrivateRouts><Details></Details></PrivateRouts>,
                loader: ({ params }) => fetch(`http://localhost:5000/touristSpot/${params.id}`)
            },
            {
                path: "/touristSpot/update/:id",
                element: <PrivateRouts><UpdateCard></UpdateCard></PrivateRouts>,
            },
            {
                path: "/touristSpot/:email",
                element: <PrivateRouts><MyList></MyList></PrivateRouts>,
            },
            {
                path: "/country/:name",
                element: <PrivateRouts><TouristInCountry></TouristInCountry></PrivateRouts>,
                loader: ({params}) => fetch(`http://localhost:5000/country/${params.name}`)
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