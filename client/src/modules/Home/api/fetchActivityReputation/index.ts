import axios from 'axios';

import API_PATHS from '../../../../constants/API_PATHS';

interface FetchActivityReputationResponse {
    message: string
}

const jwt = localStorage.getItem('jwt');

export const fetchActivityReputation = async (isLiked: boolean, user: string) => {
    try {

        const viewActivity = isLiked ? 'unLikeUser' : 'likeUser'

        const { data } = await axios.post<FetchActivityReputationResponse>(`${API_PATHS[viewActivity]}?user=${user}`, {}, {
            headers: {
                authorization: `Bearer ${jwt}`
            }
        });

        return { isError: false, message: data.message }

    } catch (e: any) {
        return { isError: true, message: e.response.data.message }
    }
}