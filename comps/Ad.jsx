import styles from '../styles/Ad.module.css';
import {motion} from 'framer-motion';
import Link from 'next/link';

const Ad = (props) => {
    return (  
        <>
            <Link href={'/prevention/appointments'}>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{type: 'tween', duration: 0.5}}
            className={styles.container}>
                <div className={styles.ad}>
                    <div className={styles.content}>
                        <a className={`${styles.text} ${styles.top}`}>
                            {/* Can be a logo too */}
                           {props.text} 
                        </a>
                    </div> 
                </div>
            </motion.div>
            </Link>
        </>
    );
}
 
export default Ad;