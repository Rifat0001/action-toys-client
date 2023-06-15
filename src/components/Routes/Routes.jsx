import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import AddToy from "../AddToy/AddToy";
import AllToy from "../AllToy/AllToy";
import Details from "../Details/Details";
import MyToy from "../MyToy/MyToy";
import Private from "./Private";
import MyToyDetails from "../MyToyDetails/MyToyDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        _children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/upDate/:id",
                element: <MyToyDetails></MyToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: "/addToy",
                element: <Private><AddToy></AddToy></Private>
            },
            {
                path: "/myToy",
                element: <Private><MyToy></MyToy></Private>
            },
            {
                path: "/allToy",
                element: <AllToy></AllToy>,
                loader: () => fetch('http://localhost:5000/toy')
            },
            {
                path: "toy/:id",
                element: <Private><Details></Details></Private>,
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
        ],
        get children() {
            return this._children;
        },
        set children(value) {
            this._children = value;
        },
    },
]);

export default router;