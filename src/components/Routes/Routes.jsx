import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";

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
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    },
]);

export default router;