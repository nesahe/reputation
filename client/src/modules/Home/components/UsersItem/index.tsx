import React, { FC, useState } from 'react';

import styles from './index.module.scss';

import { IUser } from '../../../../types';

import { chooseImageByGender } from './helpers/chooseImageByGender';
import { getNickname } from './helpers/getNickname';

import { fetchActivityReputation } from '../../api/fetchActivityReputation';

import { useFetching } from '../../../../hooks/useFetching';

import Crown from './images/crown.svg';
import Like from './images/like.svg';
import ActiveLike from './images/active-like.svg';

import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';

import ErrorMessage from '../UsersBody/components/ErrorMessage';


interface IUsersItemProps {
    user: IUser,
    index: number,
    activePage: number,
    size: number,
    sort: string
}

const UsersItem: FC<IUsersItemProps> = ({ user, index, activePage, size, sort }) => {

    const [reputation, setReputation] = useState<number>(user.reputation)
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');

    const nickname = getNickname(user.login);

    const profile = useSelector((state: IRootState) => state.user.user);

    const rootClasses = [styles.root, styles.root__me];

    const placeIndex = index + (activePage - 1) * size;

    const [fetchActivitingReputation, isActivitingReputationLoading] = useFetching(async () => {
        const { isError, message } = await fetchActivityReputation(isLiked, user.id);
        isError && setMessageError(message);
    })

    const activityUser = () => {
        setIsLiked(!isLiked);
        setReputation(isLiked ? reputation - 1 : reputation + 1);
        fetchActivitingReputation();
    }


    return (
        <div className={profile._id === user.id ? rootClasses.join(' ') : styles.root}>
            <ErrorMessage message={messageError} setMessage={setMessageError} />
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
                {profile.login !== user.login &&
                    <button disabled={isActivitingReputationLoading} onClick={activityUser} className={styles.root__reputation__button}>
                        <img src={isLiked ? ActiveLike : Like} alt="like" />
                    </button>
                }
                <div className={styles.root__reputation__counter}>{reputation}</div>
            </div>
        </div>
    );
};

export default UsersItem;