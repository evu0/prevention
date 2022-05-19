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
    const contentVariants = {
        open: {
            borderBottom : '1px solid #ccc',
            marginBottom: '2px',
        },
        closed:{
            borderBottom : 'none',
            marginBottom: '0px',
        }
    }
    const clickHandler = () => {
        setClick(!click);
        console.log(click);
    }
    return (  
        <div className={styles.container}>

            <motion.details
            variants={cardVariants}
            animate={click ? 'open' : 'closed'}
            exit={'closed'}
            transition={{type: 'tween'}}
            className={styles.card}>
                <motion.summary
                variants={contentVariants}
                animate={click ? 'open' : 'closed'}
                transition={{type: 'tween'}}
                className={styles.title} key={`${props.key}-title`} onClick={clickHandler}>
                    {props.title}
                </motion.summary>

                    <motion.div
                    key={`${props.key}-content`}
                    initial={{y:-20, opacity:0}}
                    whileInView={{y:0, opacity:1}}
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
            </motion.details>
        </div>
    );
}
 
export default Card;