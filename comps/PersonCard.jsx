import styles from '../styles/PersonCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; 

const PersonCard = (props) => {
    const variants = {
        active: {
            boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
            transition: {
                duration: 0.15,
                ease: [0.6, 0.05, -0.01, 0.9],
                type: 'tween',
            },
        },
        inactive: {
            boxShadow: 'none',
            transition: {
                duration: 0.15,
                ease: [0.6, 0.05, -0.01, 0.9],
                type: 'tween',
            },
        }
    };
    return (  
        <>
        <Link href={`https://twitter.com/${props.link}`}>
        <motion.div
        variants={variants}
        initial="inactive"
        whileHover="active"
        whileTap="active"
        className={styles.container}>

            <div className={styles.wrapper}>
                <div className={styles.pic}>
                    <Image className={styles.avatar} src={props.pic} alt="person" layout='fill' objectFit='cover' loading={'lazy'} placeholder={"blur"} />
                </div>
            </div>

            <div className={styles.info}>
                <span className={styles.name}>
                    {props.name}
                </span>
                <span className={styles.role}>
                    {props.role}
                </span>
            </div>

        </motion.div>
        </Link>
        </>
    );
}
 
export default PersonCard;