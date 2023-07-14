import React from 'react';

import Logo from './images/logo.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removeFilters } from '../../store/reducers/filtersReducer';
import { changePage } from '../../store/reducers/pageReducer';

import styles from './index.module.scss';

import { Link } from 'react-router-dom'

import AccountBody from './components/AccountBody';

const Header = () => {

    const dispatch = useAppDispatch();

    const clearFilters = () => {
        dispatch(removeFilters());
        dispatch(changePage({ page: 1 }))
    }

    return (
        <header className={styles.root}>
            <div className={`${styles.root__container} container`}>
                <div className={styles.root__body}>
                    <Link onClick={clearFilters} to="/" className={styles.root__logo}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <AccountBody />
                </div>
            </div>
        </header>
    );
};

export default Header;