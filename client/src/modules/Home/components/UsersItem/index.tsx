import { FC, useState } from 'react';

import styles from './index.module.scss';


import { IUser } from '../../../../types';

import { chooseImageByGender } from './helpers/chooseImageByGender';
import { getNickname } from './helpers/getNickname';

import Crown from './images/crown.svg';

import UsersReputationBody from '../UsersReputationBody';

import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';

import ErrorMessage from '../ErrorMessage';


interface IUsersItemProps {
    user: IUser,
    index: number,
    size: number,
    sort: string
}

const UsersItem: FC<IUsersItemProps> = ({ user, index, size, sort }) => {

    const activePage = useSelector((state: IRootState) => state.page.activePage);

    const [messageError, setMessageError] = useState<string>('');

    const nickname = getNickname(user.login);

    const profile = useSelector((state: IRootState) => state.user.user);

    const rootClasses = [styles.root, styles.root__me];

    const placeIndex = index + (activePage - 1) * size;


    return (
        <article className={profile._id === user.id ? rootClasses.join(' ') : styles.root}>
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
            <UsersReputationBody user={user} setMessageError={setMessageError} messageError={messageError} />
        </article>
    );
};

export default UsersItem;