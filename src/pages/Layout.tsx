import { Outlet, useLocation } from "react-router-dom"


export const Layout = () => {
    const location = useLocation()
    const isLogin = location.pathname === '/'
    return(
        <>
        <header>
            {isLogin ? (
                <p>Login</p>
            ): (
                <p>Movies</p>
            )}
        </header>
        <main><Outlet /></main>
        <footer>All rights reserved. @2024</footer>
        </>
    )
}