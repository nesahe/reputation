import { useState, MouseEvent, FC } from 'react';

import AccountPopup from '../AccountPopup';

import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';

import { chooseImageByGender } from '../../helpers/chooseImageByGender';

import Arrow from '../../images/arrow.svg';

import styles from './index.module.scss';


interface AccountBodyProps {
    open: boolean,
    setOpen: (open: boolean) => void
}

const AccountBody: FC<AccountBodyProps> = ({ open, setOpen }) => {

    const user = useSelector((state: IRootState) => state.user.user);

    const clickAccountBody = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setOpen(!open);
    }

    return (
        <div onClick={clickAccountBody} className={styles.root__account_body}>
            <div className={styles.root__account_panel}>
                <div className={styles.root__account_avatar}>
                    <img src={chooseImageByGender(user.gender)} alt="avatar" />
                </div>
                <div className={styles.root__account__arrow}>
                    <img src={Arrow} alt="arrow" />
                </div>
            </div>
            {open && <AccountPopup user={user} />}
        </div>
    );
};

export default AccountBody;