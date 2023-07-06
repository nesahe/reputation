import React, { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { fetchProfile } from './api/fetchProfile';

import { useFetching } from '../../../hooks/useFetching';

import { addUser } from '../../../store/reducers/userReducer';

import Loader from './components/Loader';

const Layout = () => {

    const dispatch = useAppDispatch();

    const [fetchMyProfile, isProfileLoading, profileError] = useFetching(async () => {
        const { isError, message, data } = await fetchProfile();
        if (!isError) {
            data && data.user && dispatch(addUser(data.user));
        }
    })

    useEffect(() => {
        fetchMyProfile();
    }, [])

    return isProfileLoading ? <Loader /> : <Outlet />
};

export default Layout;