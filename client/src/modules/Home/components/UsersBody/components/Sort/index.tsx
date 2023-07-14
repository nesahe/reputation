import React from 'react';

import styles from './index.module.scss';

import { useAppDispatch } from '../../../../../../hooks/useAppDispatch';
import { changeFilters } from '../../../../../../store/reducers/filtersReducer';

import { SingleValue } from 'react-select';
import { ISelectOptionsItem } from '../../../../../../types';

import { useSelector } from 'react-redux';
import { IRootState } from '../../../../../../store';

import Select from 'react-select';

import './index.scss';

const options = [
    {
        label: 'By reputation',
        value: 'reputation'
    },
    {
        label: 'By login',
        value: 'login'
    }
]


const Sort = () => {

    const dispatch = useAppDispatch();

    const { activeSort } = useSelector((state: IRootState) => state.filters)

    const onChangeSelect = (sort: SingleValue<ISelectOptionsItem>) => {
        dispatch(changeFilters({ sort: sort }))
    }

    return <Select value={activeSort} onChange={onChangeSelect} className={styles.root} options={options} placeholder="Sort..." />
};

export default Sort;