import styles from '../styles/TextAreaQuestion.module.css'

const TextAreaQuestion = (props) => {
    return (  
        <>
        <div className={styles.container}>
            <span className={styles.span}>{props.question}</span>
            <textarea
                className={styles.input}
                rows="10"
                required={props.required !== false && true}
                name={props.name}
                // set value of a prop in the parent component
                onChange={(e)=>props.setAnswer(e.target.value)}
                pattern={props.pattern}
                maxLength={props.max}
                placeholder={props.placeholder ? props.placeholder : "الإجابة"}
            />
        </div>
        </>
    );
}
 
export default TextAreaQuestion;