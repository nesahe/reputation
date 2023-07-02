import React, { FC } from 'react';

import { IUser } from '../../../../types';

import UsersItem from '../UsersItem';

import styles from './index.module.scss';

interface IUsersList {
    users: IUser[]
}

const UsersList: FC<IUsersList> = ({ users }) => {
    return (
        <div className={styles.root}>
            <h3 className={styles.root__title}>Reputation Top</h3>
            {users.map((user, index) =>
                <UsersItem user={user} index={index + 1} key={user.id} />
            )}
        </div>
    );
};

export default UsersList;