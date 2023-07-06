import React from 'react';

import Header from '../../components/layout/Header';

import styles from './index.module.scss'

import UsersBody from './components/UsersBody';


const Home = () => {

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