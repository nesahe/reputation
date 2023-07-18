import { FC } from 'react';

import ArrowLeft from './images/arrow-left.svg';
import ArrowRight from './images/arrow-right.svg';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { changePageAction } from '../../../../store/reducers/pageReducer';

import styles from './index.module.scss';
import { IRootState } from '../../../../store';

interface PaginationProps {
    size: string[],
    length: number
}

const Pagination: FC<PaginationProps> = ({ size, length }) => {

    const rootClasses = [styles.root__item, styles.root__item_active];

    const { activePage } = useSelector((state: IRootState) => state.page);

    const dispatch = useAppDispatch();

    if (size.length < 2) {
        return <></>
    }

    return (
        <div className={styles.root}>
            {activePage > 1 &&
                <div onClick={() => dispatch(changePageAction({ page: activePage - 1 }))} className={styles.root__arrow}>
                    <img src={ArrowLeft} alt="arrow-back" />
                </div>
            }
            <div className={styles.root__body}>
                {size.map(i =>
                    <div onClick={() => dispatch(changePageAction({ page: +i }))} className={+i === activePage ? rootClasses.join(' ') : styles.root__item} key={i}>{i}</div>
                )}
            </div>
            {activePage !== length &&
                <div onClick={() => dispatch(changePageAction({ page: activePage + 1 }))} className={styles.root__arrow}>
                    <img src={ArrowRight} alt="arrow-next" />
                </div>
            }
        </div>
    );
};

export default Pagination;