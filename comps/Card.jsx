import styles from '../styles/Card.module.css'
import { AnimatePresence, motion } from 'framer-motion';
import {useState} from 'react'

const Card = (props) => {
    const [click, setClick] = useState(false);
    const variants = {
        open: {
            borderRightWidth: '10px',
            borderColor: 'rgb(0, 173, 181)'
        },
        closed: {
            borderRightWidth: '1px',
            borderColor: '#ccc'
        }
    }
    const clickHandler = () => {
        setClick(!click);
        console.log(click);
    }
    return (  
        <div className={styles.container}>
            <motion.details
            variants={variants}
            animate={click ? 'open' : 'closed'}
            transition={{type: 'tween'}}
            className={styles.card}>
                <summary className={styles.title} key={`${props.key}-title`} onClick={clickHandler}>
                    {props.title}
                </summary>
                <AnimatePresence>
                    <motion.div
                    key={`${props.key}-content`}
                    initial={{y:-20, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{type: "tween"}}
                    className={styles.details}>
                        <span>
                            تكرار الفحص:
                            &nbsp;
                            {props.frequency}
                        </span>
                        <span>
                            أهمية الفحص:
                            &nbsp;
                            {props.importance}
                        </span>
                    </motion.div>
                </AnimatePresence>
            </motion.details>
        </div>
    );
}
 
export default Card;