import React from 'react';
import styles from './index.module.scss';

import AuthButton from '../../../components/ui/AuthButton';
import Select from 'react-select';

import './index.scss';

const selectOptions = [
    {
        label: "Male",
        value: "Male"
    },
    {
        label: "Female",
        value: "Female"
    },
    {
        label: "Middle",
        value: "Middle"
    }
]


const Registration = () => {
    return (
        <div className={styles.root}>
            <form className={styles.root__form}>
                <h4 className={styles.root__title}>Registration</h4>
                <div className={styles.root__inputs}>
                    <input placeholder='Login' className={styles.root__input} type="text" />
                    <input placeholder='Password' className={styles.root__input} type="text" />
                </div>
                <Select className={styles.root__select} options={selectOptions} />
                <AuthButton>Send</AuthButton>
            </form>
        </div>
    );
};

export default Registration;