import axios from "axios";

import API_PATHS from "../../../../constants/API_PATHS";

interface ILoginForm {
    login: string,
    password: string
}

export const loginUser = async (form: ILoginForm) => {
    try {
        const { data } = await axios.post(`${API_PATHS.login}?login=${form.login}&password=${form.password}`);
        return { isError: false, message: data.message, accessToken: data.accessToken }
    } catch (e: any) {
        return { isError: true, message: e.response.data.message };
    }
}