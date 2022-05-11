import Calculator from '../comps/Calculator';
import styles from '../styles/Info.module.css'

const Info = () => {
    return (  
        <div className={styles.info}>
            <div className={styles.container}>
                <Calculator/>
            </div>
        </div>
    );
}
 
export default Info;