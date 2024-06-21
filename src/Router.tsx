import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Login } from "./pages/Login";
import { MoviesApp } from "./pages/MoviesApp";
import { NotFound } from "./pages/NotFound";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/Movies',
                element: <MoviesApp />
            }
        ],
        errorElement: <NotFound />
    }
])