import React, { FC } from 'react';
import styles from './index.module.scss';

interface AuthButtonProps {
    children: any
}

const AuthButton: FC<AuthButtonProps> = ({ children, ...props }) => {
    return <button className={styles.root} {...props}>{children}</button>
};

export default AuthButton;