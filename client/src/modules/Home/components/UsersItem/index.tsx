import React, { FC } from 'react';

import styles from './index.module.scss';

import { IUser } from '../../../../types';

import Crown from './images/crown.svg';

import { chooseImageByGender } from './helpers/chooseImageByGender';

import { getNickname } from './helpers/getNickname';

import Like from './images/like.svg';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';

interface IUsersItemProps {
    user: IUser,
    index: number,
    activePage: number,
    size: number,
    sort: string
}

const UsersItem: FC<IUsersItemProps> = ({ user, index, activePage, size, sort }) => {

    const nickname = getNickname(user.login);

    const profile = useSelector((state: IRootState) => state.user.user);

    const rootClasses = [styles.root, styles.root__me];

    const placeIndex = index + (activePage - 1) * size;

    return (
        <div className={profile._id === user.id ? rootClasses.join(' ') : styles.root}>
            <div className={styles.root__profile__info}>
                <div className={styles.root__place}>
                    {placeIndex === 1 && sort === 'reputation'
                        ? <div className={styles.root__place__crown}>
                            <img src={Crown} alt="crown" />
                        </div>
                        : <span>{placeIndex}</span>
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