import { useState, useCallback, useRef, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { changeFiltersAction } from '../../../../store/reducers/filtersReducer';
import { changePageAction } from '../../../../store/reducers/pageReducer';
import { clearSearchAction } from '../../../../store/reducers/filtersReducer';

import debounce from 'lodash.debounce';

import styles from './index.module.scss';

import Close from './images/close.svg';


const SearchInput = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const { search } = useSelector((state: IRootState) => state.filters);

    const dispatch = useAppDispatch();

    const [value, setValue] = useState<string>('');

    useEffect(() => {
        setValue(search);
    }, [search])


    const updateSearch = useCallback(
        debounce((str) => {
            dispatch(changePageAction({ page: 1 }))
            str ? dispatch(changeFiltersAction({ search: str })) : dispatch(clearSearchAction());
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