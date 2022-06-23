import styles from '../../styles/Prevention.module.css';
import {PrevDB} from '../../database/PrevDB';
import ls from 'local-storage';
import Card from '../../comps/Card';
import Ad from '../../comps/Ad';
import SecondaryButton from '../../comps/SecondaryButton';

const Prevention = () => {
    
    const preventionFilter = PrevDB.map((item) => {
        const result = item.conditions.map((condition) => {
            // 0 = Doesn't matter, 1 = Yes, 2 = No
            if (
                ls('screen-age') >= condition.minAge && ls('screen-age') <= condition.maxAge
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
                    link={item.link}
                    />
                );
            }
        })
        return result;
    })
    return (  
        <div className={styles.container}>

            {/* Introduction */}
            <span className={styles.intro}>
            بناءً على البيانات المدخلة وحسب التوصيات العلمية المبنية على البراهين، فإننا ننصح بإجراء الفحوصات التالية:
            </span>

            {/* Cards */}
            {preventionFilter}

            {/* Buttons */}
            <div className={styles.buttons}>

            <Ad
            text="أحجز موعد لفحوصاتك في مستشفى المواساة الآن"
            />

            <SecondaryButton
            text="تعديل المدخلات"
            link="/questions"
            />

            </div>

        </div>
    );
}
 
export default Prevention;