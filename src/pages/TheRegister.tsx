import { useState, ChangeEvent, FormEvent } from "react";
import { Registry } from "../models/Registry";
import { RegisterForm } from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

        const handleSubmit = async(e: FormEvent) => {
            e.preventDefault()

            try {
                const response = await axios.post('http://localhost:5000/api/register', {
                username: register.userName,
                password: register.password,
                confirmPassword: register.confirmPassword

                });
                alert('Account registered :)')
                navigate('/')
                console.log(response.data)
            } catch (error) {
                console.error('Registration error', error);
                alert('Account already exist')
            }

            if(register.password !== register.confirmPassword) {
                alert('Password does not match')
                setRegister({
                    userName: register.userName,
                    password: '',
                    confirmPassword: ''
                })
                return;
            } 
        };
        
        const backBtn = () => {
            navigate('/')
        }

    return(
        <>
        <RegisterForm register={register} handleRegister={handleRegister} handleSubmit={handleSubmit} backBtn={backBtn} />
        </>
    )
}