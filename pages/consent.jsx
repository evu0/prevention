import styles from '../styles/Consent.module.css';
import { useEffect } from 'react';
import ls from 'local-storage';
import Router from 'next/router';


const Consent = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        ls.set('screen-consent', true);
        Router.push('/questions');
    }

    useEffect(() => {
        if (ls.get('screen-consent') === true) {
            Router.push('/questions');
        }
    }, []);

    return (  
        <>
            <form onSubmit={handleSubmit} className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.title}>
                        <span>ملاحظة</span>
                    </div>
                    <div className={styles.content}>
                        <span>
                            يتطلب عليك لاستخدام تطبيق فحوصاتي تسجيل بياناتك الشخصية لنتمكن من تحديد الفحوصات المناسبة لك؛
                            فأعلم رعاك الله أن جميع بياناتك المستخدمة في التطبيق يتم تخزينها في جهازك فقط ولا يتم نشرها بأي شكل من الأشكال,
                            يضمن لك تطبيق فحوصاتي الأمان والسرية لجميع بياناتك.
                        </span>
                    </div>
                    <button className={styles.button}>
                        موافق
                    </button>
                </div>
            </form>
        </>
    );
}
 
export default Consent;