import React, { useState } from 'react';

import AccountPopup from '../AccountPopup';

import { useSelector } from 'react-redux';
import { IRootState } from '../../../../../store';

import { chooseImageByGender } from '../../helpers/chooseImageByGender';

import Arrow from '../../images/arrow.svg';

import styles from './index.module.scss';


const AccountBody = () => {

    const [open, setOpen] = useState<boolean>(false);

    const user = useSelector((state: IRootState) => state.user.user);

    return (
        <div className={styles.root__account_body}>
            <div onClick={() => setOpen(!open)} className={styles.root__account_panel}>
                <div className={styles.root__account_avatar}>
                    <img src={chooseImageByGender(user.gender)} alt="avatar" />
                </div>
                <div className={styles.root__account__arrow}>
                    <img src={Arrow} alt="arrow" />
                </div>
            </div>
            <AccountPopup user={user} open={open} />
        </div>
    );
};

export default AccountBody;