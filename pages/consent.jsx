import styles from '../styles/Consent.module.css';
import { useState, useEffect } from 'react';
import ls from 'local-storage';
import Router from 'next/router';


const Consent = () => {
    const [consent, setConsent] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        ls.set('screen-consent', true);
        Router.push('/info');
    }

    return (  
        <>
            <form onSubmit={handleSubmit} className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.title}>
                        <span>شروط الإستخدام</span>
                    </div>
                    <div className={styles.content}>
                        <span>
                            يتطلب عليك لاستخدام تطبيق فحوصاتي تسجيل بياناتك الشخصية لنتمكن من تحديد الفحوصات المناسبة لك؛
                            فأعلم رعاك الله أن جميع بياناتك المستخدمة في التطبيق لا يتم تخزينها أو نشرها بأي شكل من الأشكال,
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