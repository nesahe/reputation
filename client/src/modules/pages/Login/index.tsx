import React from 'react';
import styles from './index.module.scss';

import AuthButton from '../../../components/ui/AuthButton';

const Login = () => {
    return (
        <div className={styles.root}>
            <form className={styles.root__form}>
                <h4 className={styles.root__title}>Login</h4>
                <div className={styles.root__inputs}>
                    <input placeholder='Login' className={styles.root__input} type="text" />
                    <input placeholder='Password' className={styles.root__input} type="text" />
                </div>
                <AuthButton>Send</AuthButton>
            </form>
        </div>
    );
};

export default Login;