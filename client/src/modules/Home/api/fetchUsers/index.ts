import $api from "../../../../http";

import API_PATHS from "../../../../constants/API_PATHS"

import { IUser } from "../../../../types";

interface IFetchUsersResponse {
    users: IUser[],
    length: string,
}

export const fetchUsers = async (pageSize: string, page: string, sort: string, search: string) => {
    const { data } = await $api.get<IFetchUsersResponse>(`/${API_PATHS.fetchUsers}?size=${pageSize}&page=${page}&sort=${sort}&search=${search}`);
    return data
}