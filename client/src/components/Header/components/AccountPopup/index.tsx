import { FC, MouseEvent } from 'react';

import { chooseImageByGender } from '../../helpers/chooseImageByGender';
import { getNickname } from '../../helpers/getNickname';

import { logoutUser } from '../../api/logoutUser';

import styles from './index.module.scss'
import { IProfile } from '../../../../types';

interface AccountPopupProps {
    user: IProfile
}

const AccountPopup: FC<AccountPopupProps> = ({ user }) => {

    const nickname = getNickname(user.login)

    const unLogin = async () => {
        localStorage.removeItem('jwt');
        await logoutUser();
        document.location.reload();
    }

    return (
        <div onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} className={styles.root__account__popup}>
            <div className={styles.root__account__popup__body}>
                <div className={styles.root__account__panel__avatar}>
                    <img src={chooseImageByGender(user.gender)} alt="avatar" />
                </div>
                <div className={styles.root__account__panel__info}>
                    <div className={styles.root__account__panel__nickname}>{nickname}</div>
                    <button onClick={unLogin} className={styles.root__account__panel__button}>unlogin</button>
                </div>
            </div>
        </div>
    );
};

export default AccountPopup;