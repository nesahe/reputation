import Header from '../../components/Header';

import styles from './index.module.scss'

import UsersBody from './components/UsersBody';


const Home = () => {

    return (
        <div className={styles.root}>
            <Header />
            <div className='container'>
                <UsersBody />
            </div>
        </div>
    );
};

export default Home;