import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { fetchRefreshToken } from './api/fetchRefreshToken';

import { useFetching } from '../../../hooks/useFetching';

import { addUserAction } from '../../../store/reducers/userReducer';

import Loader from './components/Loader';

const Layout = () => {

    const dispatch = useAppDispatch();

    const [fetchRefreshWithProfile, isRefreshLoading, refreshError] = useFetching(async () => {
        const { user } = await fetchRefreshToken();
        dispatch(addUserAction(user));
    })

    useEffect(() => {
        localStorage.getItem('jwt') && fetchRefreshWithProfile();
    }, [])

    return isRefreshLoading ? <Loader /> : <Outlet />
};

export default Layout;