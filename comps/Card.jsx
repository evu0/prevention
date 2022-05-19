import styles from '../styles/Card.module.css'
import { AnimatePresence, motion } from 'framer-motion';
import {useState} from 'react'

const Card = (props) => {
    const [click, setClick] = useState(false);
    const cardVariants = {
        open: {
            borderRightWidth: '10px',
            borderColor: 'rgb(0, 173, 181)',
        },
        closed: {
            borderRightWidth: '1px',
            borderColor: '#ccc'
        }
    }
    const titleVariants = {
        open: {
            borderBottom : '1px solid #ccc',
            marginBottom: '2px',
        },
        closed:{
            borderBottom : 'none',
            marginBottom: '0px',
        }
    }
    const contentVariants = {
        open: {
            opacity: 1,
            y: 0,
        },
        closed: {
            opacity: 0,
            y: -20,
            height: 0,
        },
    }
    const clickHandler = () => {
        setClick(!click);
        console.log(click);
    }
    return (  
        <div className={styles.container}>

            <motion.div
            onClick={clickHandler}
            variants={cardVariants}
            animate={click ? 'open' : 'closed'}
            transition={{type: 'tween'}}
            className={styles.card}>
                <motion.div
                variants={titleVariants}
                animate={click ? 'open' : 'closed'}
                transition={{type: 'tween'}}
                className={styles.title} key={`${props.key}-title`}>
                    {props.title}
                </motion.div>

                    <motion.div
                    key={`${props.key}-content`}
                    variants={contentVariants}
                    animate={click ? 'open' : 'closed'}
                    transition={{type: "tween"}}
                    className={styles.details}>
                        <span className={styles.content}>
                            <b>
                            تكرار الفحص:
                            </b>
                            &nbsp;
                            {props.frequency}
                        </span>
                        <span className={styles.content}>
                            <b>
                            أهمية الفحص:
                            </b>
                            &nbsp;
                            {props.importance}
                        </span>
                    </motion.div>
            </motion.div>
        </div>
    );
}
 
export default Card;