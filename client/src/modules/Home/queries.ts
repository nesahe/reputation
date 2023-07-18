import { fetchUsers } from './api/fetchUsers/index';

import { useQuery } from "react-query";

import { SingleValue } from 'react-select';

import { ISelectOptionsItem } from '../../types';


export const useFetchUsers = (activePage: number, activeSort: SingleValue<ISelectOptionsItem> | undefined, search: string, pageSize: number) => {
    return useQuery(['users', [activePage, activeSort, search]], () => fetchUsers(String(pageSize), String(activePage - 1), activeSort?.value || '', search.toLowerCase()), {
        refetchOnWindowFocus: false,
        keepPreviousData: true
    })
}