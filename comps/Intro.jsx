import styles from '../styles/Intro.module.css'
import Image from 'next/image'

const Intro = (props) => {
    return (  
        <>
        <div className={styles.intro}>

            <div className={styles.right}>
                <h1 className={styles.title}>
                {props.title}
                </h1>
            </div>

            <div className={styles.left}>
                <Image src={props.image} objectFit='contain' layout='fill' width='100%' height='100%' priority />
            </div>

        </div>
        </>
    );
}
 
export default Intro;