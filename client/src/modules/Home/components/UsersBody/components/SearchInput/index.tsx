import React, { FC, useState, useCallback } from 'react';

import debounce from 'lodash.debounce';

import styles from './index.module.scss';

interface SearchInputProps {
    onChange: (value: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ onChange }) => {

    const [value, setValue] = useState<string>('');

    const updateSearch = useCallback(
        debounce((str) => { onChange(str) }, 500)
        , []
    )

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateSearch(e.target.value);
        setValue(e.target.value);
    }


    return <input className={styles.root} onChange={changeInput} value={value} type="text" />
};

export default SearchInput;