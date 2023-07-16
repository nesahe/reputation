import $api from '../../../../http';

import API_PATHS from '../../../../constants/API_PATHS';

interface FetchActivityReputationResponse {
    message: string
}

export const fetchActivityReputation = async (isLiked: boolean, user: string) => {
    try {

        const viewActivity = isLiked ? 'unLikeUser' : 'likeUser'

        const { data } = await $api.post<FetchActivityReputationResponse>(`/${API_PATHS[viewActivity]}?user=${user}`);

        return { isError: false, message: data.message }

    } catch (e: any) {
        return { isError: true, message: e.response.data.message }
    }
}