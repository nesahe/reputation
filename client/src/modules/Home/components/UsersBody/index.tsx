import React from 'react';

import UsersList from '../UsersList';

import { useQuery } from 'react-query';

import { fetchUsers } from '../../api/fetchUsers';

const UsersBody = () => {

    const { isLoading, error, data } = useQuery('users', fetchUsers, {
        refetchOnWindowFocus: false,
        keepPreviousData: true
    })


    if (isLoading) {
        return <div>Loading</div>
    }

    if (error) {
        return <div>Error</div>
    }

    return (
        <div>
            <UsersList users={data} />
        </div>
    );
};

export default UsersBody;