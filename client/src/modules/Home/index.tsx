import React, { useEffect } from 'react';

import Header from '../../components/layout/Header';

import styles from './index.module.scss'

import UsersBody from './components/UsersBody';

import { useFetching } from '../../hooks/useFetching';

import { fetchProfile } from './api/fetchProfile';

const Home = () => {

    const [fetchMyProfile, isProfileLoading, profileError] = useFetching(async () => {
        await fetchProfile();
    })

    useEffect(() => {
        fetchMyProfile();
    }, [])


    return (
        <div className={styles.root}>
            <Header />
            <div className='container'>
                <UsersBody />
            </div>
        </div>
    );
};

export default Home;