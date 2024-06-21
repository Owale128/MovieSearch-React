import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { TheLogin } from "./pages/TheLogin";
import { MoviesApp } from "./pages/MoviesApp";
import { NotFound } from "./pages/NotFound";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <TheLogin />
            },
            {
                path: '/Movies',
                element: <MoviesApp />
            }
        ],
        errorElement: <NotFound />
    }
])