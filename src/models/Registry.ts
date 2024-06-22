import { Login } from "./Login";

export class Registry extends Login {
    constructor(
        userName: string,
        password: string,
        public confirmPassword: string
    ) {
        super(userName, password)
    }
}