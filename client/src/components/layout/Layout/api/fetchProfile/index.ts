import axios from 'axios'

import { IProfile } from '../../../../../types'
import API_PATHS from '../../../../../constants/API_PATHS'

interface IFetchProfileResponse {
    user: IProfile
}

export const fetchProfile = async () => {
    try {
        const { data } = await axios.get<IFetchProfileResponse>(`${API_PATHS.fetchProfile}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })

        return { data, isError: false }

    } catch (e: any) {
        return { isError: true, message: e.response.data.message }
    }
}