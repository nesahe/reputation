import React from 'react';

import styles from './index.module.scss';

import Loading from './images/loader.svg';

const Loader = () => {
    return (
        <div className={styles.root}>
            <img src={Loading} alt="loading" />
        </div>
    );
};

export default Loader;