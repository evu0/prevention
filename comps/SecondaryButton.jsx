import styles from '../styles/SecondaryButton.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SecondaryButton = (props) => {
    return (  
        <>
            <Link href={props.link}>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{type: 'tween', duration: 0.5}}
            className={styles.container}>
                <div className={styles.ad}>
                    <div className={styles.content}>
                        <a className={styles.text}>
                           {props.text} 
                        </a>
                    </div> 
                </div>
            </motion.div>
            </Link>
        </>
    );
}
 
export default SecondaryButton;