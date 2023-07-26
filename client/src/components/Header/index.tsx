import { FC } from 'react';
import Logo from './images/logo.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removeFiltersAction } from '../../store/reducers/filtersReducer';
import { changePageAction } from '../../store/reducers/pageReducer';

import styles from './index.module.scss';

import { Link } from 'react-router-dom'

import AccountBody from './components/AccountBody';

interface HeaderProps {
    open: boolean,
    setOpen: (open: boolean) => void
}

const Header: FC<HeaderProps> = ({ open, setOpen }) => {

    const dispatch = useAppDispatch();

    const clearFilters = () => {
        dispatch(removeFiltersAction());
        dispatch(changePageAction({ page: 1 }))
    }

    return (
        <header className={styles.root}>
            <div className={`${styles.root__container} container`}>
                <div className={styles.root__body}>
                    <Link onClick={clearFilters} to="/" className={styles.root__logo}>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <AccountBody open={open} setOpen={setOpen} />
                </div>
            </div>
        </header>
    );
};

export default Header;