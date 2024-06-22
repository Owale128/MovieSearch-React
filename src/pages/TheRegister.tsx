import { useState, ChangeEvent, FormEvent } from "react";
import { Registry } from "../models/Registry";
import { RegisterForm } from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";

export const TheRegister = () => {

    const[register, setRegister] = useState<Registry>({
        userName: '',
        password: '',
        confirmPassword: ''
    })

        const navigate = useNavigate()

        const handleRegister = (e: ChangeEvent<HTMLInputElement>) => {
            const{name, value} = e.target;
            setRegister({...register, [name]: value})
        }

        const handleSubmit = (e: FormEvent) => {
            e.preventDefault()
            if(register.password !== register.confirmPassword) {
                alert('Passwords do not match')
                
                setRegister({
                    userName: register.userName,
                    password: '',
                    confirmPassword: ''
                })
            } else {
                confirm('Account registered :)')
                navigate('/')
            }
        }

        const backBtn = () => {
            navigate('/')
        }

    return(
        <>
        <RegisterForm register={register} handleRegister={handleRegister} handleSubmit={handleSubmit} backBtn={backBtn} />
        </>
    )
}