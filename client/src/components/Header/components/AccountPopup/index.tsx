import React, { FC } from 'react';

import { chooseImageByGender } from '../../helpers/chooseImageByGender';
import { getNickname } from '../../helpers/getNickname';

import styles from './index.module.scss'
import { IProfile } from '../../../../types';

interface AccountPopupProps {
    open: boolean,
    user: IProfile
}

const AccountPopup: FC<AccountPopupProps> = ({ open, user }) => {

    const rootClasses = [styles.root__account__popup];

    open && rootClasses.push(styles.open);

    const nickname = getNickname(user.login)

    const unlogin = () => {
        localStorage.removeItem('jwt');
        document.location.reload();
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={styles.root__account__popup__body}>
                <div className={styles.root__account__panel__avatar}>
                    <img src={chooseImageByGender(user.gender)} alt="avatar" />
                </div>
                <div className={styles.root__account__panel__info}>
                    <div className={styles.root__account__panel__nickname}>{nickname}</div>
                    <button onClick={unlogin} className={styles.root__account__panel__button}>unlogin</button>
                </div>
            </div>
        </div>
    );
};

export default AccountPopup;