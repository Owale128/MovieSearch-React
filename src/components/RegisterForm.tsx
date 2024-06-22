import { ChangeEvent, FormEvent } from "react";
import '../sass/loginAndRegister.scss'
import Ryuk from '../images/Ryuk.png'


interface IRegisterFormProps {
    register: {userName: string, password: string, confirmPassword: string};
    handleRegister: (e:ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e:FormEvent) => void;
    backBtn: () => void;
}

export const RegisterForm = ({register, handleRegister, handleSubmit, backBtn}: IRegisterFormProps) => {

    return(
        <div className="formContainer">
            <img src={Ryuk} alt="Ruyk"  className="Ruyk"/>
        <form onSubmit={handleSubmit} className="registerForm">
            <label htmlFor="userName">Username</label>
            <input type="text"
            value={register.userName}
            onChange={handleRegister}
            className="userName"
            name="userName"
            required
            />
            <label htmlFor="password">Password</label>
            <input type="password"
            value={register.password}
            onChange={handleRegister}
            className="password"
            name="password"
            required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password"
            value={register.confirmPassword}
            onChange={handleRegister}
            className="confirmPassword"
            name="confirmPassword"
            />
            <button className="registerBtn">Register</button>
           <button onClick={backBtn} className="backToLoginBtn">Back</button>
        </form>
            </div>
    )
}