import { ChangeEvent, FormEvent } from "react";

interface LoginFormProps{
    login: {userName: string; password: string};
    goToRegister: () => void;
    handleLogin: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent) => void;
}

export const LoginForm = ({login, goToRegister, handleLogin, handleSubmit}: LoginFormProps) => {

    return(

        <>
    <h1> This is Login Page </h1>
     <form onSubmit={handleSubmit}>
        <label htmlFor="userName">UserName</label>
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
    <button>Login</button>
    <button onClick={goToRegister}>Register</button>
    </form> 
        </>
    )
}