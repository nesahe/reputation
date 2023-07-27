import { useEffect, FC, MutableRefObject } from 'react';

import styles from './index.module.scss';

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

import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';

import { useFetchUsers } from '../../queries';

import { getPaginationItemCount } from '../../helpers/getPaginationItemCount';
import { getPaginationSlice } from '../../helpers/getPaginationSlice';

import { useNavigate } from 'react-router-dom';


interface UsersBodyProps {
    isMounted: MutableRefObject<boolean>
}


const UsersBody: FC<UsersBodyProps> = ({ isMounted }) => {

    const { activeSort, search } = useSelector((state: IRootState) => state.filters);
    const { activePage } = useSelector((state: IRootState) => state.page);

    const pageSize = 3;

    const { isLoading, error, data } = useFetchUsers(activePage, activeSort, search, pageSize);

    const navigate = useNavigate();

    const errorBody = error as AxiosError;

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
            <section className={styles.root__top}>
                <ClearFilters />
                <Sort />
                <SearchInput />
            </section>
            <UsersList sort={activeSort?.value || ''} size={pageSize} users={data.users} />
            <Pagination length={fullPaginationItemsArr.length} size={slicePaginationItemsArr} />
        </div>
    );
};

export default UsersBody;