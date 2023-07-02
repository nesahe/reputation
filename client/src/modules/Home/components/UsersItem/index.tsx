import React, { FC } from 'react';

import styles from './index.module.scss';

import { IUser } from '../../../../types';

import Crown from './images/crown.svg';

import { chooseImageByGender } from './helpers/chooseImageByGender';

import { getNickname } from './helpers/getNickname';

import Like from './images/like.svg';

interface IUsersItemProps {
    user: IUser,
    index: number
}

const UsersItem: FC<IUsersItemProps> = ({ user, index }) => {

    const nickname = getNickname(user.login);

    return (
        <div className={styles.root}>
            <div className={styles.root__profile__info}>
                <div className={styles.root__place}>
                    {index === 1
                        ? <div className={styles.root__place__crown}>
                            <img src={Crown} alt="crown" />
                        </div>
                        : <span>{index}</span>
                    }
                </div>
                <div className={styles.root__photo}>
                    <img src={chooseImageByGender(user.gender)} alt="profile" />
                </div>
                <div className={styles.root__name}>{nickname}</div>
            </div>
            <div className={styles.root__reputation}>
                <button className={styles.root__reputation__button}>
                    <img src={Like} alt="like" />
                </button>
                <div className={styles.root__reputation__counter}>{user.reputation}</div>
            </div>
        </div>
    );
};

export default UsersItem;