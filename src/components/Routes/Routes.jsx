import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import AddToy from "../AddToy/AddToy";
import AllToy from "../AllToy/AllToy";
import Details from "../Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addToy",
                element: <AddToy></AddToy>
            },
            {
                path: "/allToy",
                element: <AllToy></AllToy>,
                loader: () => fetch('http://localhost:5000/toy')
            },
            {
                path: "toy/:id",
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
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

export default router;