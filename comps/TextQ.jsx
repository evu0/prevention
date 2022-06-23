import styles from '../styles/TextQ.module.css'

const TextQ = (props) => {
    return (  
        <div className={styles.container}>
            <span className={styles.span}>{props.question}</span>
            <input
                type="text"
                className={styles.input}
                placeholder="الإجابة"
                required
                // set value of a prop in the parent component
                onChange={(e)=>props.setAnswer(e.target.value)}
                pattern='^[1-9]\d*$'
                maxLength='3'
            />
        </div>
    );
}
 
export default TextQ;