import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { useAppDispatch } from '../../../hooks/useAppDispatch';

import { useFetching } from '../../../hooks/useFetching';

import { fetchRefreshToken } from './api/fetchRefreshToken';

import Loader from './components/Loader';

const Layout = () => {

    const dispatch = useAppDispatch();

    const [isRefresh, setIsRefresh] = useState<boolean>(false);

    const [fetchRefreshWithProfile, isRefreshLoading] = useFetching(async () => {
        await fetchRefreshToken(setIsRefresh, dispatch);
    })

    useEffect(() => {
        localStorage.getItem('jwt') ? fetchRefreshWithProfile() : setIsRefresh(true)
    }, [])

    return isRefreshLoading || !isRefresh ? <Loader /> : <Outlet />
};

export default Layout;