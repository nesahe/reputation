import React from 'react';
import Logo from './images/logo.svg';
import styles from './index.module.scss';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className={styles.root}>
            <div className='container'>
                <div className={styles.root__body}>
                    <Link to="/" className={styles.root__logo}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <div className={styles.root__account_body}>
                        <div className={styles.root__account_logo}></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;