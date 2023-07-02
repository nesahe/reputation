import axios from 'axios'

import API_PATHS from '../../../../constants/API_PATHS'

export const fetchProfile = async () => {
    try {
        const { data } = await axios.get(`${API_PATHS.fetchProfile}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })

        console.log(data);

    } catch (e) {

    }
}