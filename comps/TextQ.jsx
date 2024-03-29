import styles from '../styles/TextQ.module.css'

const TextQ = (props) => {
    return (  
        <div className={styles.container}>
            <span className={styles.span}>{props.question}</span>
            <input
                type="text"
                className={styles.input}
                // if there is a value, set it to the value
                placeholder={props.placeholder ? props.placeholder : "الإجابة"}
                // if you don't want to require the user to enter something, you can set required={false}
                required={props.required !== false && true}
                // set value of a prop in the parent component
                onChange={(e)=>props.setAnswer(e.target.value)}
                pattern={props.pattern}
                maxLength={props.max}
                name={props.name}
                value={props.answer}
            />
        </div>
    );
}
 
export default TextQ;