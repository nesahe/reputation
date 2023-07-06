import axios from "axios"

import API_PATHS from "../../../../constants/API_PATHS"

import { IUser } from "../../../../types";

interface IFetchUsersResponse {
    users: IUser[]
}

export const fetchUsers = async () => {

    const { data } = await axios.get<IFetchUsersResponse>(`${API_PATHS.fetchUsers}`);
    return data.users
}