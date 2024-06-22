import { NavLink, Outlet, useLocation } from "react-router-dom"
import '../sass/main.scss'

export const Layout = () => {
    const location = useLocation();
    const isLogin = location.pathname === '/';
    const isRegister = location.pathname === '/register'

    return(
        <>
        <header>
            {!isLogin && !isRegister && (
                <>
                <NavLink to={'/'}><button>Logout</button></NavLink>
                <p>Movies</p>
                </>
            )}
          {isLogin && <p>Login</p>}
          {isRegister && <p>Register</p>}
        </header>
        <main><Outlet /></main>
        <footer>All rights reserved. @2024</footer>
        </>
    )
}