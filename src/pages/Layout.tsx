import { NavLink, Outlet } from "react-router-dom"


export const Layout = () => {

    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to={'movies'}>Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main><Outlet /></main>
        <footer>All rights reserved. @2024</footer>
        </>
    )
}