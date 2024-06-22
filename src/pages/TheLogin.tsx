import { ChangeEvent, FormEvent, useState } from "react"
import { Login } from "../models/Login"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "../components/LoginForm"


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

       const goToregister = () => {
        navigate('/register')
       }
  
    return (
        <>
    <LoginForm login={login} goToRegister={goToregister} handleLogin={handleLogin} handleSubmit={handleSubmit}  />
        </>
    )
}