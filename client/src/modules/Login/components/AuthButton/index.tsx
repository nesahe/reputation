import React, { FC } from 'react';
import styles from './index.module.scss';

import Loader from './images/loader.svg';

interface AuthButtonProps {
    children: any,
    isLoading: boolean
}


const AuthButton: FC<AuthButtonProps> = ({ children, isLoading, ...props }) => {

    const rootClasses = [styles.root];

    isLoading && rootClasses.push(styles.loader);

    return (
        <button disabled={isLoading} className={rootClasses.join(' ')} {...props}>
            {isLoading
                ? <img src={Loader} alt="loader" className={styles.root__loader} />
                : children
            }
        </button>
    )
};

export default AuthButton;