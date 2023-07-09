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
        label: 'By nickname',
        value: 'login'
    }
]

interface SortProps {
    value: SingleValue<ISelectOptionsItem> | undefined,
    onChange: (sort: SingleValue<ISelectOptionsItem>) => void,
}

const Sort: FC<SortProps> = ({ value, onChange }) => {
    return <Select value={value} onChange={onChange} className={styles.root} options={options} placeholder="Sorting..." />
};

export default Sort;