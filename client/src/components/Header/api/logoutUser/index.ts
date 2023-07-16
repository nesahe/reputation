import $api from '../../../../http';

import API_PATHS from '../../../../constants/API_PATHS';

interface LogoutUserResponse {
    message: string
}

export const logoutUser = async () => {

    const { data } = await $api.post<LogoutUserResponse>(`/${API_PATHS.logoutUser}`)

    return data
}