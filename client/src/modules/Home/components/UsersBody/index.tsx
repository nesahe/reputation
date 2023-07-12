import React, { useState, useEffect, useRef } from 'react';

import styles from './index.module.scss';

import { SingleValue } from 'react-select';
import { ISelectOptionsItem } from '../../../../types';

import { AxiosError } from 'axios';

import UsersList from '../UsersList';
import Pagination from '../Pagination';
import Loader from '../Loader';
import Sort from './components/Sort';
import SearchInput from './components/SearchInput';
import UsersListBody from '../UsersListBody';
import ErrorMessageBody from './components/ErrorMessageBody';

import qs from 'qs';

import { useQuery } from 'react-query';

import { fetchUsers } from '../../api/fetchUsers';

import { getPaginationItemCount } from '../../helpers/getPaginationItemCount';
import { useNavigate } from 'react-router-dom';


const UsersBody = () => {

    const [activePage, setActivePage] = useState<number>(1);
    const [activeSort, setActiveSort] = useState<SingleValue<ISelectOptionsItem>>();

    const isMounted = useRef(false);

    const [search, setSearch] = useState<string>('');

    const pageSize = 3;

    const { isLoading, error, data } = useQuery(['users', [activePage, activeSort, search]], () => fetchUsers(String(pageSize), String(activePage - 1), activeSort?.value || '', search.toLowerCase()), {
        refetchOnWindowFocus: false,
        keepPreviousData: true
    })

    const navigate = useNavigate();

    const errorBody = error as AxiosError

    useEffect(() => {
        if (window.location.search && !isMounted.current) {
            const { search, sort } = qs.parse(window.location.search.substring(1)) as { search: string, sort: string }
            setSearch(search);
            setActiveSort({ value: sort, label: `By ${sort}` });
        }
    }, [])

    useEffect(() => {
        if (isMounted.current) {
            const queryParams = qs.stringify({
                search: search,
                sort: activeSort?.value
            });

            navigate(`?${queryParams}`);
        }

        isMounted.current = true;

    }, [search, activeSort])

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        const { message } = errorBody.response?.data as { message: string };
        return <ErrorMessageBody message={message} />
    }

    if (!data) {
        return (
            <UsersListBody title="Users Not Found">
                <div className={styles.root__not__found}></div>
            </UsersListBody>
        )
    }

    const paginationItemsArr = getPaginationItemCount(+data.length / pageSize);

    return (
        <div className={styles.root}>
            <div className={styles.root__top}>
                <Sort value={activeSort} onChange={setActiveSort} />
                <SearchInput search={search} setActivePage={setActivePage} onChange={setSearch} />
            </div>
            <UsersList sort={activeSort?.value || ''} activePage={activePage} size={pageSize} users={data.users} />
            <Pagination activePage={activePage} setActivePage={setActivePage} size={paginationItemsArr} />
        </div>
    );
};

export default UsersBody;