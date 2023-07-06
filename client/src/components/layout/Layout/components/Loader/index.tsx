import React from 'react';

import styles from './index.module.scss';

import Loading from './images/loader.svg';


const Loader = () => {
    return (
        <div className={styles.root}>
            <div className={styles.root__body}>
                <img src={Loading} alt="loading" />
            </div>
        </div>
    );
};

export default Loader;