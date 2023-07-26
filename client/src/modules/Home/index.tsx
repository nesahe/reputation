import { useState } from 'react';

import Header from '../../components/Header';

import styles from './index.module.scss'

import UsersBodyLayout from './components/UsersBodyLayout';

const Home = () => {

    const [openPopupHeader, setOpenPopupHeader] = useState<boolean>(false);

    return (
        <div onClick={() => setOpenPopupHeader(false)} className={styles.root}>
            <Header open={openPopupHeader} setOpen={setOpenPopupHeader} />
            <div className='container'>
                <UsersBodyLayout />
            </div>
        </div>
    );
};

export default Home;