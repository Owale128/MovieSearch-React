import { ChangeEvent, FormEvent, useState } from "react"
import { Login } from "../models/Login"
import { useNavigate } from "react-router-dom"


export const TheLogin = () => {
        const[login, setlogin] = useState<Login>({
            userName: '',
            password: ''
        })

        const navigate = useNavigate()

       const handleLogin = (e: ChangeEvent<HTMLInputElement>) => {
                const{name, value} = e.target;
                setlogin({...login, [name]: value})
       }

       const handleSubmit = (e: FormEvent) => {
            e.preventDefault();
            navigate('/movies')

            setlogin({
                userName: '',
                password: ''
            })
       }
  
    return (
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
        </form>
        </>
    )
}