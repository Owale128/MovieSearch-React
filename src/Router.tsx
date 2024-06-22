import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { TheLogin } from "./pages/TheLogin";
import { MoviesApp } from "./pages/MoviesApp";
import { NotFound } from "./pages/NotFound";
import { TheRegister } from "./pages/TheRegister";

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
                path: '/register',
                element: <TheRegister />
            },
            {
                path: '/Movies',
                element: <MoviesApp />
            }
        ],
        errorElement: <NotFound />
    }
])