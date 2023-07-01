import React, { FC } from 'react';
import styles from './index.module.scss';

import Loader from './images/loader.svg';

interface AuthButtonProps {
    children: any,
    isLoading: boolean
}


const AuthButton: FC<AuthButtonProps> = ({ children, ...props }) => {

    const rootClasses = [styles.root];

    props.isLoading && rootClasses.push(styles.loader);

    return (
        <button disabled={props.isLoading} className={rootClasses.join(' ')} {...props}>
            {props.isLoading
                ? <img src={Loader} alt="loader" className={styles.root__loader} />
                : children
            }
        </button>
    )
};

export default AuthButton;