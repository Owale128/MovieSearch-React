import { Outlet, useLocation, useNavigate } from "react-router-dom"
import '../sass/main.scss'

export const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === '/';
    const isRegister = location.pathname === '/register'
    const logOut = () => {
        if(confirm('Are you sure you want to logut')) {
            navigate('/');
        }

    }

    return(
        <>
        <header>
            {!isLogin && !isRegister && (
                <>
                <button onClick={logOut}>Logout</button>
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