import React, { useState } from 'react';

import styles from './index.module.scss';

import { SingleValue } from 'react-select';
import { ISelectOptionsItem } from '../../../../types';

import UsersList from '../UsersList';
import Pagination from '../Pagination';
import Loader from '../Loader';
import Sort from './components/Sort';
import SearchInput from './components/SearchInput';

import { useQuery } from 'react-query';

import { fetchUsers } from '../../api/fetchUsers';

import { getPaginationItemCount } from '../../helpers/getPaginationItemCount';



const UsersBody = () => {

    const [activePage, setActivePage] = useState<number>(1);
    const [activeSort, setActiveSort] = useState<SingleValue<ISelectOptionsItem>>();

    const [search, setSearch] = useState<string>('');

    const pageSize = 3;

    const { isLoading, error, data } = useQuery(['users', [activePage, activeSort, search]], () => fetchUsers(String(pageSize), String(activePage - 1), activeSort?.value || '', search.toLowerCase()), {
        refetchOnWindowFocus: false,
        keepPreviousData: true
    })

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <div>Error</div>
    }

    if (!data) {
        return <div>Users not found</div>
    }

    console.log(search);

    const paginationItemsArr = getPaginationItemCount(+data.length / pageSize);

    return (
        <div className={styles.root}>
            <div className={styles.root__top}>
                <Sort value={activeSort} onChange={setActiveSort} />
                <SearchInput onChange={setSearch} />
            </div>
            <UsersList sort={activeSort?.value || ''} activePage={activePage} size={pageSize} users={data.users} />
            <Pagination activePage={activePage} setActivePage={setActivePage} size={paginationItemsArr} />
        </div>
    );
};

export default UsersBody;