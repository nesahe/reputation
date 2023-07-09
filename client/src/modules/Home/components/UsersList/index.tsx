import React, { FC } from 'react';

import { IUser } from '../../../../types';

import UsersItem from '../UsersItem';

import styles from './index.module.scss';

interface IUsersList {
    users: IUser[],
    activePage: number,
    size: number,
    sort: string
}

const UsersList: FC<IUsersList> = ({ users, activePage, size, sort }) => {

    return (
        <div className={styles.root}>
            <h3 className={styles.root__title}>{users.length === 0 ? 'Users Not Found' : 'Reputation Top'}</h3>
            {users.map((user, index) =>
                <UsersItem sort={sort} activePage={activePage} size={size} user={user} index={index + 1} key={user.id} />
            )}
        </div>
    );
};

export default UsersList;