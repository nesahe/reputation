import axios, { AxiosResponse } from 'axios';

import { InternalAxiosRequestConfig } from 'axios';

import { API_URL } from '../constants';
import API_PATHS from '../constants/API_PATHS';

interface RefreshTokenResponse {
    accessToken: string
}

const updateAccessToken = async () => {
    const { data } = await axios.get<RefreshTokenResponse>(`${API_URL}/${API_PATHS.refresh}`, { withCredentials: true });
    return data.accessToken;

}

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`
    return config
})

$api.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, async (error) => {

    const originalRequest = error.config;

    if (error.response.status == 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const accessToken = await updateAccessToken();

        localStorage.setItem('jwt', accessToken || '');

        return $api(originalRequest);
    }

    throw error
})

export default $api;