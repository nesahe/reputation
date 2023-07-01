import React from 'react';

import Robot from './images/robot.svg';

import styles from './index.module.scss';

import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className={styles.root}>
            <div className={styles.root__body}>
                <div className={styles.root__image}>
                    <img src={Robot} alt="robot" />
                </div>
                <div className={styles.root__body__text}>
                    <h2 className={styles.root__title}>404</h2>
                    <div className={styles.root__text}>Not found</div>
                    <Link className={styles.root__link} to="/">Home</Link>
                </div>
            </div>
        </section>
    );
};

export default Error;