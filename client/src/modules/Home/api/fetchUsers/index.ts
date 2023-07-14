import axios from "axios"

import API_PATHS from "../../../../constants/API_PATHS"

import { IUser } from "../../../../types";

interface IFetchUsersResponse {
    users: IUser[],
    length: string,
}

const jwt = localStorage.getItem('jwt');

export const fetchUsers = async (isSearch: boolean, pageSize: string, page: string, sort: string, search: string) => {

    if (!search) {
        const { data } = await axios.get<IFetchUsersResponse>(`${API_PATHS.fetchUsers}?size=${pageSize}&page=${page}&sort=${sort}&search=${search}`, {
            headers: {
                authorization: `Bearer ${jwt}`
            }
        });
        return data
    }
}