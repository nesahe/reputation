import axios from "axios";

interface IRegistrationForm {
    login: string,
    password: string,
    gender: string
}

export const registrationUser = (form: IRegistrationForm) => {
    console.log(form);
}