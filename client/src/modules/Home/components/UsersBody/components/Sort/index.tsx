import React, { FC } from 'react';

import styles from './index.module.scss';

import { SingleValue } from 'react-select';
import { ISelectOptionsItem } from '../../../../../../types';

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

interface SortProps {
    value: SingleValue<ISelectOptionsItem> | undefined,
    onChange: (sort: SingleValue<ISelectOptionsItem> | undefined) => void
}

const Sort: FC<SortProps> = ({ value, onChange }) => {

    const onChangeSelect = (sort: SingleValue<ISelectOptionsItem>) => {
        onChange(sort);
    }

    return <Select value={value} onChange={onChangeSelect} className={styles.root} options={options} placeholder="Sort..." />
};

export default Sort;