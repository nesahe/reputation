import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { fetchRefreshToken } from './api/fetchRefreshToken';

import { useFetching } from '../../../hooks/useFetching';

import { addUserAction } from '../../../store/reducers/userReducer';

import Loader from './components/Loader';

const Layout = () => {

    const dispatch = useAppDispatch();

    const [isRefresh, setIsRefresh] = useState<boolean>(false);


    const [fetchRefreshWithProfile, isRefreshLoading] = useFetching(async () => {
        const { user } = await fetchRefreshToken();
        dispatch(addUserAction(user));
        setIsRefresh(true)
    })


    useEffect(() => {
        localStorage.getItem('jwt') ? fetchRefreshWithProfile() : setIsRefresh(true)
    }, [])

    return isRefreshLoading || !isRefresh ? <Loader /> : <Outlet />
};

export default Layout;