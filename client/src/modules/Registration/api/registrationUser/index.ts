import axios from "axios";

import API_PATHS from "../../../../constants/API_PATHS";

interface IRegistrationForm {
    login: string,
    password: string,
    gender: string
}

export const registrationUser = async (form: IRegistrationForm) => {
    try {
        const { data } = await axios.post(`${API_PATHS.registration}?login=${form.login}&password=${form.password}&gender=${form.gender}`);
        return { message: data.message, isError: false };
    } catch (e: any) {
        return { message: e.response.data.message, isError: true };
    }
}