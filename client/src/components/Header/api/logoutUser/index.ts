import axios from 'axios';

import API_PATHS from '../../../../constants/API_PATHS';

const jwt = localStorage.getItem('jwt');

export const logoutUser = async () => {

    const data = await axios.post(`${API_PATHS.logoutUser}`, {}, {
        headers: {
            authorization: `Bearer ${jwt}`
        }
    })

    console.log(data);
}