import { FC } from 'react';

import { IUser } from '../../../../types';

import UsersItem from '../UsersItem';

import styles from './index.module.scss';

import UsersListBody from '../UsersListBody';

interface IUsersList {
    users: IUser[],
    size: number,
    sort: string
}

const UsersList: FC<IUsersList> = ({ users, size, sort }) => {

    return (
        <UsersListBody title={users.length === 0 ? 'Users Not Found' : 'Reputation Top'}>
            <div className={styles.root}>
                {users.map((user, index) =>
                    <UsersItem sort={sort} size={size} user={user} index={index + 1} key={user.id} />
                )}
            </div>
        </UsersListBody>
    )
};

export default UsersList;