import { ChangeEvent, FormEvent, useState } from "react"
import { Login } from "../models/Login"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "../components/LoginForm"
import axios from "axios"

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

       const handleSubmit = async (e: FormEvent) => {
            e.preventDefault();

            try {
                const response = await axios.post('http://localhost:5000/api/login', {
                    username: login.userName,
                    password: login.password
                })
                const { token } = response.data
                localStorage.setItem('token', token)
                navigate('/movies')
            } catch(error) {
                alert('Invalid username or password')
                console.error('Login error', error)
            }
       }

       const goToregister = () => {
        navigate('/register')
       }
  
    return (
        <>
    <LoginForm login={login} goToRegister={goToregister} handleLogin={handleLogin} handleSubmit={handleSubmit}  />
        </>
    )
}