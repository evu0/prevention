import Image from 'next/image';
import Link from 'next/link';
import Intro from '../../comps/Intro';
import styles from '../../styles/Appointments.module.css'

const Appointments = () => {
    return (  
        <>
        <Intro title="المواعيد" image="/booking.svg" />
        <div className={styles.container}>

            <div className={styles.section}>
                <h1 className={styles.title}>
                    أحجز موعدك عبر تطبيق صحتي
                </h1>

                <span className={styles.subtitle}>
                    حمل التطبيق من متجر التطبيقات الخاص بجهازك
                </span>

                <div className={styles.btns}>

                    <Link href={'https://play.google.com/store/apps/details?id=com.lean.sehhaty&hl=ar&gl=US'}>
                        <a className={styles.btn} target="_blank"> { /* target="_blank" to open the link in a new tab */ }
                            <Image src={'/googleplay.svg'} layout={'fill'}/>
                        </a>
                    </Link>

                    <Link href={'https://apps.apple.com/sa/app/%D8%B5%D8%AD%D8%AA%D9%8A-sehhaty/id1459266578'}>
                        <a className={styles.btn} target="_blank">
                            <Image src={'/appstore.svg'} layout={'fill'}/>
                        </a>
                    </Link>

                </div>

            </div>

            <div className={styles.section}>

                <h1 className={styles.title}>
                    أو عبر مستشفى طب الأسرة والمجتمع
                </h1>

                <span className={styles.subtitle}>
                    خاص لمنسوبي جامعة الإمام عبدالرحمن بن فيصل
                </span>

                <div className={styles.btns}>

                <Link href={'https://wa.me/+966133335111'}>
                    <a className={`${styles.btn} ${styles.whatsapp}`} target="_blank"> { /* target="_blank" to open the link in a new tab */ }
                        واتساب
                    </a>
                </Link>

                <Link href={'tel:+966133335111'}>
                    <a className={`${styles.btn} ${styles.call}`} target="_blank">
                        أتصل الآن
                    </a>
                </Link>

                </div>

            </div>

        </div>
        </>
    );
}
 
export default Appointments;