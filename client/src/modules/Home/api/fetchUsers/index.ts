import axios from "axios"

import API_PATHS from "../../../../constants/API_PATHS"

export const fetchUsers = async () => {

    const { data } = await axios.get(`${API_PATHS.fetchUsers}`);
    return data.users
}