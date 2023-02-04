import styles from '../styles/Land.module.css';

const Land = (props) => {
    return (  
        <div className={styles.container}>
            {props.title != "" && (
            <span className={styles.title}>{props.title}</span>
            )}
            <span className={styles.description}>{props.description}</span>
        </div>

    );
}
 
export default Land;