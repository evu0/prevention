import styles from '../../styles/Prevention.module.css';
import {PrevDB} from '../../database/PrevDB';
import { motion } from 'framer-motion';
import ls from 'local-storage';
import { useEffect } from 'react';

const Prevention = () => {
    
    const preventionFilter = PrevDB.map((item) => {
        const result = item.conditions.map((condition) => {
            // 0 = Doesn't matter, 1 = Yes, 2 = No
            if (
                ls('screen-age') >= condition.minAge && ls('screen-age') < condition.maxAge
                && ls('screen-bmi') >= condition.bmi
                && ( ls('screen-gender') === condition.gender || condition.gender === 0 )
                && ( ls('screen-preg') === condition.preg || condition.preg === 0 )
                && ( ls('screen-smokeb4') === condition.smokeb4 || condition.smokeb4 === 0 )
                && ( ls('screen-sex') === condition.sex || condition.sex === 0 )
                && ( ( ls('screen-risk') != null && ls('screen-risk').some(element => { return condition.risk.includes(element) }) ) || condition.risk.includes(0) )
            ){
                return (
                    console.log(condition.risk),
                    <motion.div
                    whileHover={{borderRightWidth: '10px', borderColor: 'rgb(0, 173, 181)'}}
                    transition={{type: 'tween'}}
                    className={styles.card}
                    key={`${item.id}-${condition.id}-card`}
                    >
                        <div
                        key={`${item.id}-${condition.id}`}
                        className={styles.cardHeader}>
                            <span>{item.title}</span>
                            {/* <h4>{condition.frequency}</h4> */}
                        </div>
                    </motion.div>
                );
                }
        })
        return result;
    })
    return (  
        <div className={styles.container}>
            {preventionFilter}
        </div>
    );
}
 
export default Prevention;