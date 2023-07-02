import { API_URL } from "..";

const API_PATHS = {
    registration: `${API_URL}/auth/registration`,
    login: `${API_URL}/auth/login`,
    fetchUsers: `${API_URL}/reputation`,
    fetchProfile: `${API_URL}/auth/profile`
}


export default API_PATHS