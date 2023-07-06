import React from 'react';

import Logo from './images/logo.svg';

import styles from './index.module.scss';

import { Link } from 'react-router-dom'

import AccountBody from './components/AccountBody';

const Header = () => {

    return (
        <header className={styles.root}>
            <div className={`${styles.root__container} container`}>
                <div className={styles.root__body}>
                    <Link to="/" className={styles.root__logo}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <AccountBody />
                </div>
            </div>
        </header>
    );
};

export default Header;