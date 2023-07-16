import { useEffect, useRef } from 'react';

import styles from './index.module.scss';

import { changeFiltersAction } from '../../../../store/reducers/filtersReducer';

import { AxiosError } from 'axios';

import UsersList from '../UsersList';
import Pagination from '../Pagination';
import Loader from '../Loader';
import Sort from '../Sort';
import SearchInput from '../SearchInput';
import UsersListBody from '../UsersListBody';
import ErrorMessageBody from '../ErrorMessageBody';
import ClearFilters from '../ClearFilters';

import qs from 'qs';

import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';

import { useQuery } from 'react-query';

import { fetchUsers } from '../../api/fetchUsers';

import { getPaginationItemCount } from '../../helpers/getPaginationItemCount';
import { getPaginationSlice } from '../../helpers/getPaginationSlice';

import { useNavigate } from 'react-router-dom';


const UsersBody = () => {

    const dispatch = useAppDispatch();

    const { activeSort, search } = useSelector((state: IRootState) => state.filters);
    const { activePage } = useSelector((state: IRootState) => state.page);

    const isMounted = useRef(false);

    const pageSize = 3;

    const { isLoading, error, data } = useQuery(['users', [activePage, activeSort, search]], () => fetchUsers(String(pageSize), String(activePage - 1), activeSort?.value || '', search.toLowerCase()), {
        refetchOnWindowFocus: false,
        keepPreviousData: true
    })

    const navigate = useNavigate();

    const errorBody = error as AxiosError;


    useEffect(() => {
        if (window.location.search && !isMounted.current) {
            const { search, sort } = qs.parse(window.location.search.substring(1)) as { search: string, sort: string }
            dispatch(changeFiltersAction({ search: search, sort: { value: sort, label: `By ${sort}` } }))
        }
    }, [])

    useEffect(() => {
        if (isMounted.current) {
            const queryParams = qs.stringify({
                search: search,
                sort: activeSort?.value
            });

            if (search || activeSort?.value) {
                navigate(`?${queryParams}`);
            }
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

    const fullPaginationItemsArr = getPaginationItemCount(+data.length / pageSize);
    const slicePaginationItemsArr = getPaginationSlice(fullPaginationItemsArr, activePage);


    return (
        <div className={styles.root}>
            <div className={styles.root__top}>
                <ClearFilters />
                <Sort />
                <SearchInput />
            </div>
            <UsersList sort={activeSort?.value || ''} activePage={activePage} size={pageSize} users={data.users} />
            <Pagination length={fullPaginationItemsArr.length} size={slicePaginationItemsArr} />
        </div>
    );
};

export default UsersBody;