import axios from 'axios';

import { API_URL } from '../../../../../constants';
import API_PATHS from '../../../../../constants/API_PATHS';
import { IProfile } from '../../../../../types';

interface RefreshTokenResponse {
    accessToken: string,
    user: IProfile
}

export const fetchRefreshToken = async () => {
    const { data } = await axios.get<RefreshTokenResponse>(`${API_URL}/${API_PATHS.refresh}`, { withCredentials: true });
    localStorage.setItem('jwt', data.accessToken);

    return { user: data.user }
}