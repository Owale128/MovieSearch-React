import { ChangeEvent, FormEvent } from "react";
import '../sass/loginAndRegister.scss'
import L from '../images/L.png'

interface LoginFormProps{
    login: {userName: string; password: string};
    goToRegister: () => void;
    handleLogin: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent) => void;
    loading: boolean;
}

export const LoginForm = ({login, goToRegister, handleLogin, handleSubmit, loading}: LoginFormProps) => {

    return(
        <div className="formContainer">
        <img src={L} alt='L'className="L" />
        {loading && (
            <div className="spinnerOverlay">
                <div className="spinner"></div>
            </div>
        )}
     <form onSubmit={handleSubmit} className="loginForm">
        <label htmlFor="userName">Username</label>
        <input type="text"
        id="userName"
        value={login.userName}
        onChange={handleLogin}
        name="userName"
        required
        />
        <label htmlFor="password">Password</label>
        <input type="password"
        id="password"
        value={login.password}
        onChange={handleLogin}
        name="password"
        required
        />
    <button className="loginBtn">Login</button>
    <button onClick={goToRegister} className="goToRegisterBtn">Register a new account</button>
    </form> 
        </div>
    )
}