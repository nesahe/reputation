import axios from "axios";

import API_PATHS from "../../../../constants/API_PATHS";

interface ILoginForm {
    login: string,
    password: string
}

export const loginUser = async (form: ILoginForm) => {
    const { data } = await axios.post(`${API_PATHS.login}?login=${form.login}&password=${form.password}`);
}