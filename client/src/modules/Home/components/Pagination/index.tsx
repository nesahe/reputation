import { FC } from 'react';

import ArrowLeftDisabled from './images/arrow-left-disabled.svg';
import ArrowRightDisabled from './images/arrow-right-disabled.svg';

import ArrowLeftActive from './images/arrow-left-active.svg';
import ArrowRightActive from './images/arrow-right-active.svg';

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
        <section className={styles.root}>
            {activePage > 1
                ? <div onClick={() => dispatch(changePageAction({ page: activePage - 1 }))} className={[styles.root__arrow, styles.root__arrow_active].join(' ')}>
                    <img src={ArrowLeftActive} alt="arrow-back-active" />
                </div>
                : <div className={styles.root__arrow}>
                    <img src={ArrowLeftDisabled} alt="arrow-back-disabled" />
                </div>
            }
            <div className={styles.root__body}>
                {size.map(i =>
                    <div onClick={() => dispatch(changePageAction({ page: +i }))} className={+i === activePage ? rootClasses.join(' ') : styles.root__item} key={i}>{i}</div>
                )}
            </div>
            {activePage !== length
                ? <div onClick={() => dispatch(changePageAction({ page: activePage + 1 }))} className={[styles.root__arrow, styles.root__arrow_active].join(' ')}>
                    <img src={ArrowRightActive} alt="arrow-next" />
                </div>
                : <div className={styles.root__arrow}>
                    <img src={ArrowRightDisabled} alt="arrow-next" />
                </div>
            }
        </section>
    );
};

export default Pagination;