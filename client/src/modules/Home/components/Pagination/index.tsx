import React, { FC, useState } from 'react';

import styles from './index.module.scss';

interface PaginationProps {
    size: string[],
    activePage: number,
    setActivePage: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({ size, activePage, setActivePage }) => {

    const rootClasses = [styles.root__item, styles.root__item_active];

    return (
        <div className={styles.root}>
            {size.map(i =>
                <div onClick={() => setActivePage(+i)} className={+i === activePage ? rootClasses.join(' ') : styles.root__item} key={i}>{i}</div>
            )}
        </div>
    );
};

export default Pagination;