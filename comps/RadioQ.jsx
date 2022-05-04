import styles from '../styles/RadioQ.module.css';

const RadioQ = (props) => {
    return (  
        <div className={styles.container}>
            <span className={styles.span}>{props.question}</span>
            <div className={styles.buttons}>
                <button type='button' onClick={()=>props.setAnswer(1)} className={styles.button}>
                    {props.options[0]}
                </button>
                <button type='button' onClick={()=>props.setAnswer(2)} className={styles.button}>
                    {props.options[1]}
                </button>
            </div>
        </div>
    );
}
 
export default RadioQ;