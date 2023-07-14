import React from 'react';

import { useAppDispatch } from '../../../../../../hooks/useAppDispatch';
import { removeFilters } from '../../../../../../store/reducers/filtersReducer';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../../../store';

import { Link } from 'react-router-dom';

import Clear from './images/clear.svg';

import styles from './index.module.scss';



const ClearFilters = () => {

    const dispatch = useAppDispatch();

    const { activeSort, search } = useSelector((state: IRootState) => state.filters)

    const clearFilters = () => {
        dispatch(removeFilters());
    }

    if (!search && !activeSort) {
        return <></>
    }


    return <Link className={styles.root} to="/" onClick={clearFilters}>
        <img src={Clear} alt="clear" />
    </Link>
};


export default ClearFilters;