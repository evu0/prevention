import styles from '../styles/Loader.module.css';
import Image from 'next/image'

const Loader = () => {
    return (  
        <div className={styles.container}>
            <Image src="/Spinner.svg" width={200} height={200} />
        </div>
    );
}
 
export default Loader;