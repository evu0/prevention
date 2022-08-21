import styles from '../styles/Section.module.css'

const Section = (props) => {
    return (  
        <>
        <div className={styles.container}>
            {/* z-index 1 content layer */}
            <div className={styles.content}>
                {props.children}
            </div>
            {/* z-index -1 absolute background layer */}
            <div className={styles.bg} style={{backgroundColor: props.backgroundColor}}></div>
        </div>
        </>
    );
}
 
export default Section;