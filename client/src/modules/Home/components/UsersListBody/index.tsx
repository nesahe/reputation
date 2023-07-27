import { FC } from 'react';

import styles from './index.module.scss';

interface UsersListBodyProps {
    children?: any,
    title: string
}

const UsersListBody: FC<UsersListBodyProps> = ({ children, title }) => {
    return (
        <section className={styles.root}>
            <div className={styles.root__title}>{title}</div>
            {children}
        </section>
    );
};

export default UsersListBody;