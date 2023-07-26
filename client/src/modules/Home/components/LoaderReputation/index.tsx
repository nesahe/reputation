import Loader from './images/loader.svg';

import styles from './index.module.scss';

const LoaderReputation = () => {
    return <div><img className={styles.root__loader} src={Loader} alt="loader" /></div>
};

export default LoaderReputation;