import { addUserAction } from "../../../../../store/reducers/userReducer";
import { API_URL } from '../../../../../constants';
import API_PATHS from '../../../../../constants/API_PATHS';
import { IProfile } from '../../../../../types';

import { Dispatch, AnyAction } from "@reduxjs/toolkit";

import axios from 'axios';

interface RefreshTokenResponse {
    accessToken: string,
    user: IProfile
}


export const fetchRefreshToken = async (setIsRefresh: (isRefresh: boolean) => void, dispatch: Dispatch<AnyAction>) => {

    try {
        const { data } = await axios.get<RefreshTokenResponse>(`${API_URL}/${API_PATHS.refresh}`, { withCredentials: true });
        localStorage.setItem('jwt', data.accessToken);

        dispatch(addUserAction(data.user));

    } catch (e) {
        localStorage.removeItem('jwt');
        window.location.reload();
    } finally {
        setIsRefresh(true);
    }
}