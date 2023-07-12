import React, { FC, useState, useCallback, useRef, useEffect } from 'react';

import debounce from 'lodash.debounce';

import styles from './index.module.scss';

import Close from './images/close.svg';

interface SearchInputProps {
    onChange: (value: string) => void,
    setActivePage: (page: number) => void,
    search: string
}

const SearchInput: FC<SearchInputProps> = ({ onChange, setActivePage, search }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const isMounted = useRef(false);

    const [value, setValue] = useState<string>('');

    useEffect(() => {
        if (!isMounted.current) {
            setValue(search);
        }

        isMounted.current = true
    }, [])


    const updateSearch = useCallback(
        debounce((str) => {
            setActivePage(1);
            onChange(str);
        }, 500)
        , []
    )

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateSearch(e.target.value);
        setValue(e.target.value);
    }

    const clear = () => {
        setValue('');
        updateSearch('');
        inputRef.current?.focus();
    }

    return (
        <div className={styles.root}>
            <input ref={inputRef} className={styles.root__input} onChange={changeInput} value={value} type="text" />
            {value.length > 0 &&
                <div onClick={clear} className={styles.root__close}>
                    <img src={Close} alt="close" />
                </div>}
        </div>
    )
};

export default SearchInput;