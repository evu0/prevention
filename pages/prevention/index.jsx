import styles from '../../styles/Prevention.module.css';
import {PrevDB} from '../../database/PrevDB';
import { motion } from 'framer-motion';
import ls from 'local-storage';
import { useEffect } from 'react';
import Card from '../../comps/Card';

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
                    <Card
                    key={`${item.key}-${condition.id}`}
                    title={item.title}
                    frequency={condition.frequency}
                    importance={item.importance}
                    />
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