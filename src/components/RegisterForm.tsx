import { ChangeEvent, FormEvent } from "react";


interface IRegisterFormProps {
    register: {userName: string, password: string, confirmPassword: string};
    handleRegister: (e:ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e:FormEvent) => void;
    backBtn: () => void;
}

export const RegisterForm = ({register, handleRegister, handleSubmit, backBtn}: IRegisterFormProps) => {

    return(
        <>
           <button onClick={backBtn}>Back</button>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={register.userName}
            onChange={handleRegister}
            id="userName"
            name="userName"
            required
            />
            <input type="password"
            value={register.password}
            onChange={handleRegister}
            id="password"
            name="password"
            required
            />
            <input type="password"
            value={register.confirmPassword}
            onChange={handleRegister}
            id="confirmpassword"
            name="confirmPassword"
            />
            <button>Register</button>
        </form>
        </>
    )
}