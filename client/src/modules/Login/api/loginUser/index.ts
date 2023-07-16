import $api from "../../../../http";

import API_PATHS from "../../../../constants/API_PATHS";

interface ILoginForm {
    login: string,
    password: string
}

interface ILoginUserResponse {
    message: string,
    accessToken: string
}

export const loginUser = async (form: ILoginForm) => {
    try {
        const { data } = await $api.post<ILoginUserResponse>(`/${API_PATHS.login}?login=${form.login}&password=${form.password}`);
        return { isError: false, message: data.message, accessToken: data.accessToken }
    } catch (e: any) {
        return { isError: true, message: e.response.data.message as string };
    }
}