import { useState, FC } from 'react';

import { fetchActivityReputation } from '../../api/fetchActivityReputation';

import { useFetching } from '../../../../hooks/useFetching';

import Like from './images/like.svg';
import ActiveLike from './images/active-like.svg';

import styles from './index.module.scss';

import { IUser } from '../../../../types';

import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';

import LoaderReputation from '../LoaderReputation';


interface UsersReputationBodyProps {
    user: IUser,
    messageError: string,
    setMessageError: (error: string) => void
}

const UsersReputationBody: FC<UsersReputationBodyProps> = ({ user, messageError, setMessageError }) => {

    const profile = useSelector((state: IRootState) => state.user.user);

    const [reputation, setReputation] = useState<number>(user.reputation);

    const [isLiked, setIsLiked] = useState<boolean>(user.isLiked);

    const [fetchActivitingReputation, isActivitingReputationLoading] = useFetching(async () => {
        const { isError, message } = await fetchActivityReputation(isLiked, user.id);
        if (isError) {
            setMessageError(message);
        } else {
            setReputation(isLiked ? reputation - 1 : reputation + 1);
            setIsLiked(!isLiked);
        }
    })


    const activityUser = async () => {
        setMessageError('');
        fetchActivitingReputation();
    }

    return (
        <div className={styles.root__reputation}>
            {isActivitingReputationLoading
                ? <LoaderReputation />
                : <>
                    {profile.login !== user.login
                        ? <button onClick={activityUser} className={styles.root__reputation__button}>
                            <img src={isLiked ? ActiveLike : Like} alt="like" />
                        </button>
                        : <div className={styles.root__reputation__button_pattern}></div>
                    }
                    <div className={styles.root__reputation__counter}>{reputation}</div>
                </>
            }
        </div>
    );
};

export default UsersReputationBody;