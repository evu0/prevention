import styles from '../styles/RadioQ.module.css';
import { motion } from 'framer-motion';

const RadioQ = (props) => {
    const variants = {
        selected: {
            color: 'rgb(0, 173, 181)',
            backgroundColor: '#fff',
            fontWeight: 'bold',
            transition: {
                type: 'tween',
        },
        unselected: {
            backgroundColor: '#fff',
            }
        }
    }
    return (  
        <div className={styles.container}>
            <span className={styles.span}>{props.question}</span>
            <div className={styles.buttons}>
                <motion.button
                variants={variants}
                animate={props.answer === 1 ? 'selected' : 'unselected'}
                type='button' onClick={()=>props.setAnswer(1)} className={styles.button}>
                    {props.options[0]}
                </motion.button>
                <motion.button
                variants={variants}
                animate={props.answer === 2 ? 'selected' : 'unselected'}
                type='button' onClick={()=>props.setAnswer(2)} className={styles.button}>
                    {props.options[1]}
                </motion.button>
            </div>
        </div>
    );
}
 
export default RadioQ;